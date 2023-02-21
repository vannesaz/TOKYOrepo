// let john = ["John", "Doe", 35, true];


// console.log(john)

// Object

// let john = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 35,
// };
// //dot
// console.log(john.lastName);
// //bracket
// console.log(john["age"]);

//Array Build in Method
// let numbers = [1, 2, 3, 4];
// // for(let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[1]);
// // }
// numbers.forEach(function (value,index){
//     console.log(value +  "index :" + index )
// });

let students =[
    {
        fullName : "John",
        lastName : "Doe",
        address : "Manado",
        age : 24,
    },
    {
        fullName : "Jim",
        lastName : "Did",
        address : "Minut",
        age = 25,
    },
    {
        fullName : "Bill",
        lastName : "Tim",
        address : "Makassar",
        age : 26,
    }
];

// students.forEach(function (value){
//     console.log("Name : " + value.fullName)
// });

// let studentNames =  students.map(function (value){
//     return value.fullName
// });

// console.log(studentNames);

//Filter
// let stdJohn = students.filter(function(value){
//     return value.fullName === "John";
// });

// console.log(stdJohn);

let stdJohn = students.filter(function(value){
    return value.age >= 24;
});

console.log(stdJohn);