//2 STATES OF PROMISE -> .then() & .catch() :-

const getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("Iam a promise.");
        resolve("success");
        // reject("Network Error");
    })
}

//.then()

let promise = getPromise();
promise.then((res) => {
    console.log(`Promsie Fulfilled, ${res}`);
})

//.catch()
promise.catch((err) => {
    console.log(`Rejected, ${err}`);
})