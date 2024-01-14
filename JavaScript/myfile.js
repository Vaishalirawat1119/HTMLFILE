let company = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(company);

//Remove first company (Bloomberg) from the array.
let remove = company.shift();
console.log(remove);

//Remove Uber and add OLA in its place.
let delAndAdd = company.splice(1,1,"OLA");
console.log(delAndAdd);

//Add Amazon in the end.
let addCompany = company.push("Amazon");
console.log(addCompany);