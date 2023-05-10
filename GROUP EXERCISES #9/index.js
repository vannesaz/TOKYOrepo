// 1.Promise
function helloWorld() {
     return new Promise((resolve) => {
         setTimeout(() =>{
             resolve ("Hello World!");
         }, 2000);
     })
};
async function messages() {
   const msg = await helloWorld();
    console.log(msg);
}
  
messages();

// 2.Fetch
function ambilDataUser() {
    fetch('https://reqres.in/api/users')
        .then((response) => response.json())       
        .then((users) => console.log(users.data))
}
ambilDataUser();

//No 3
let ambilDataUserAsync = async() => {
    let response = await fetch('https://reqres.in/api/users');
    let user = await response.json();
    console.log(user.data);
};
ambilDataUserAsync();

//No 4
let axios = require("axios");
let ambilDataUserAxios = async() => {
    let response = await axios.get('https://reqres.in/api/users');
    console.log(response.data);
};
ambilDataUserAxios();
