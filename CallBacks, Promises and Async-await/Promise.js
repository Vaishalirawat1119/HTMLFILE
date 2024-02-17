let promise = new Promise((resolve, reject) => {
    console.log("Iam a promise.");
    resolve("success")
});

function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data: ${dataID}`);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
}