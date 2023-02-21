//1.
//Promise
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}
async function messages() {
    let msg = await helloWorld();
    console.log(msg);
}
messages();

//2.
//Fetch
function ambilDataUser() {
    let promise = new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            resolve(users);
        })
        .catch(err => {
            reject(err);
        });
})
return promise;
}
ambilDataUser().then(users => {
console.log(users);
}
).catch(err => {
console.log(err);
}
);

//3.
//Async Await
async function ambilDataUser() {
    let response = await fetch('https://reqres.in/api/users');
    let users = await response.json();
    console.log(users.data);
}
ambilDataUser();