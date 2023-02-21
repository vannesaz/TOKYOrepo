// Asynchronous JS
// let john = {
//     fullName: "John Doe", 
//     age: 35,
//     isMarried: true,
// };
// setTimeout(() =>{
//     console.log(john.fullName);
// }, 2000);
// console.log(john.age);
// console.log(john.isMarried);

//Parallel Asynchronous
// console.log("Proses");
// setTimeout(() => {
//     console.log('Proses 1');
// }, 1000);
// setTimeout(() => {
//     console.log('Proses 2');
// }, 2000);
// console.log("Yang penting Proses");
// setTimeout(() => {
//     console.log('Proses 3');
// }, 3000);

//Concurent Asynchronous
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//         },3000)
//     },2000)
// },1000)

//Promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//     if(true){
//         resolve("Berhasil");
//     } else{
//         reject("Gagal");
//     }
// });

// newPromise.then((result) => `${result}!!!`)
// .then((result2) => console.log(result2))
// .catch((error) => console.log(error))
// .finally(() => console.log("Pasti Jalan"));

//Async Await
// const getData = async () =>{
//    let result = await newPromise;
//    console.log(result);
// }

// getData();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => console.log(json));

const getJSONPlaceholder = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await response.json();
    console.log(response);
};

getJSONPlaceholder();