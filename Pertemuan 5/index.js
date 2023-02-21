// // Sting Literal
// let john = {
//     fullName: "John Doe",
//     age: 35,
//     address: "Manado",
// }

// let kalimat6 = `Hallo, nama saya ${john.fullName}, umur saya ${john.age}, dan saya tinggal di ${john.address}.`
// console.log(kalimat6);

// function greetings (){
//     return "Hello world";
// }

// let result = greetings();
// console.log(greetings);

// Arrow Function
// const greet = (fullName) => `Hello ${john.fullName}`;
// let result = greet();
// console.log(result);

// Default Parameter
// const login = (username, password) => {
//     if (password === undefined){
//         password = "12345";
//     }
//     return `Username = ${username}, Password = ${password}`
// };

// const login = (username, password = "12345") => {
    
//     return `Username = ${username}, Password = ${password}`;
// };

// let output = login ("johndoe");
// console.log(output);

// Rest Parameter & Spread Operator

// Rest Parameter
const penjumlahanArray = (a, b, c, d, ...params) => {
    let result = params.map((value) => value);
    return result;
};
console.log(penjumlahanArray(1, 2, 3, 4, 5));
