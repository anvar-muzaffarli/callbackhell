//Callback Hell
//axios SWR 


// Callback Cehennemi :)
// commentler


// function getUserData(userId){
//     //Promise Chaining
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     //istifadeciler
//         .then((cavab)=> {
         
//            return cavab.json()
//         })
//         .then(user => {
//             console.log("Istifadeci", user) //debugging ucun
//             return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//         })
//         //postlar
//         .then(postlardanGelenCavab=> postlardanGelenCavab.json())
//         .then(statuslar => {
//             console.log("Postlar", statuslar)
//             // map HOF Higher Order Function 
//             //callback
//             return Promise.all(statuslar.map(birStatus=> 
//                 fetch(`https://jsonplaceholder.typicode.com/comments?postId=${birStatus.id}`)
//                 .then(cavab => cavab.json())
//                 .then(reyler=> {

//                      //document.querySelector("#post").innerHTML += `<div> </div>`
//                     console.log(`${birStatus.id} li status ucun  gelen serhler`, reyler)
//                 })
//              ))
//         })
//         // toastify
//         .catch(error=> console.log(error))

       
   
// }

// getUserData(5)

async function getUserData(userId) {
try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //
    const user = await userResponse.json()
    console.log("Istifadeci", user)

    //istifadecinin paylasdigi status
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`) 
    const posts = await postResponse.json()

    console.log("Postlar",posts)
    //[{}, {}, {}]
    for(const post of posts) {
        const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        const comments = await commentResponse.json()
        console.log(`Gelen sherhler`, comments)

    }
    
}

catch(error){
    //Toastify
    console.log(error)
}
}

getUserData(5)





