function getData (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data: ${dataID}`);
            resolve("success");
        }, 3000);
    });
};

//Promise-Chain

getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    return getData(4);
}).then((res) => {
    console.log(res);
});