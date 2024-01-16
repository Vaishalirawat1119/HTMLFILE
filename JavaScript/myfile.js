let num = prompt("Enter any number");
let arr = [];

for(let i=1; i<=num; i++){
    arr[i-1] = i;
}

let sum = arr.reduce((prev,cur) =>{
    return prev+cur;
});
console.log(`Sum: ${sum}`);

let fact = arr.reduce((prev,cur) =>{
    return prev*cur;
});
console.log(`Factorial: ${fact}`);

// let stuMarks = [56,73,81,34,85,90,94,99];
// const res = stuMarks.filter((stuMarks) =>{
//     return stuMarks>=90;
// });

// console.log(res);



// function vowelsCheck(word){
//     let count = 0;
//     for(const char of word){
//         if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }



// let company = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
// console.log(company);

// //Remove first company (Bloomberg) from the array.
// let remove = company.shift();
// console.log(remove);

// //Remove Uber and add OLA in its place.
// let delAndAdd = company.splice(1,1,"OLA");
// console.log(delAndAdd);

// //Add Amazon in the end.
// let addCompany = company.push("Amazon");
// console.log(addCompany);