// create a promises
// promise is a object
// resolve is a method
const promiseOne = new Promise(function(resolve, reject){
// Do an async task
// DB calls, cryptography, network

setTimeout(function(){
    console.log('Async task is complete');
    resolve();
}, 1000)

})


promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Arvind", eamil: "arv@1234"})
    },1000)
})


promiseThree.then(function(user){
      console.log(user);     
})



const promiseFour = new Promise(function(resolve, reject){

      setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "thakur", password: "123"})
        } else{
            reject('ERROR : Something went wrong')
        }
      }, 1000)     

})


promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})

.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
           let error = true;
           if(!error){
            resolve({username: "JavaScript", password: "123"})
           }else{
            reject('ERROR: JS went worng')
           }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const respone = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await respone.json()
//         console.log(data);
//     }catch (error){
//         console.log("E : ", error);
//     }
// }


// getAllUsers();




fetch('https://api.github.com/users/arvindsinghthakur')
.then((Response) => {
    return Response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// promise.all
// yes this is also available, kuch reading aap b kro