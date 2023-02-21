// Spread Operator
// let numbers =[1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);

// Duplikasi Array
// let numbers2 = numbers;
// numbers.push(6);
// console.log(numbers2);

// let numbers2 = [...numbers];
// numbers.push(6);
// console.log(...numbers2);

// let number1 = [1, 2, 3];
// let number2 = [5, 6];
// let number3 = [7, 8, 9];
// let combineNumber = number1.concat(4, number2, number3);
// console.log(...combineNumber);

// let john = {
//     fullName : "John Doe",
//     age : 33,
//     address : "Manado",
// };

// john = {
//     ...john,
//     job : "Teacher",
// };
// console.log(john);

// let obj1 = {
//     a:1,
//     b:2,
// };
// let obj2 = {
//     c:3,
//     d:4,
// };
// let combineObj = {
//     ...obj1,
//     ...obj2,
// };
// console.log(combineObj);


// Destructuring
// let numbers = [1, 2, 3, 4, 5];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// let d = numbers[3];
// let e = numbers[4];
// let [a, b, c, d, e] = numbers;
// console.log(a);

let john = {
    fullName : "John Doe",
    age : 35,
    address : "Manado",
};

// let {fullName: nameLengkap, age, address} = john;
// console.log(nameLengkap, age, address);

const ucapkanSalam = ({fullName}) => {
    let kalimat = `Halo nama saya ${fullName}`;
    console.log(kalimat);
};
ucapkanSalam(john);