function getData(dataID, getNextData) {
    //set timing 
    setTimeout(() => {
        console.log(`Data: ${dataID}`);

        if(getNextData){
            getNextData();
        }
    }, 4000);
}

getData(1, () => {
    console.log("getting data2.....");
    getData(2, () => {
        console.log("getting data3.....");
        getData(3, () => {
            console.log("getting data4.....");
            getData(4, () => {
                console.log("getting data5.....");
                getData(5, () => {
                    console.log("getting data6.....");
                    getData(6);
                })  
            })    
        })
    })
})