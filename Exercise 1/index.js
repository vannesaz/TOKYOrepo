let people = ['Greg', 'Mary', 'Devon', 'James'];

//Using a for-loop, iterate through this array and console.log all of the people.
for(i = 0; i<people.length; i++)
{
    console.log(people[i]);
};

//Using a forEach(), iterate through this array and console.log all of the people.
people.forEach(function(value, index){
    console.log(people[index]);
});

//Write the command to remove "Greg" from the array.
people.shift();
console.log(people);

//Write the command to remove "James" from the array. 
people.pop();
console.log(people);

//Write the command to add "Matt" to the front of the array. 
people.unshift('Matt');
console.log(people);

//Write the command to add your name to the end of the array.
people.push('Tokyo');
console.log(people);

//Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(i = 0; i<people.length; i++)
{
    console.log(people[i]);
    if(people[i] == 'Mary')
    {
        break;
    }
};
//Write the command to make a copy of the array using slice.
let copyPeople = people.slice(1, );
console.log(copyPeople);
//Redefine the people variable with the value you started with, using the splice command.
people.splice(2,1,'Elizabeth', 'Artie');
console.log(people);

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat('Bob');
console.log(withBob);

//Object

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//add Go
programming.languages.push("Go");
console.log(programming.languages);
//difficulty value to 7
programming["difficulty"] = 7;
console.log(programming.difficulty);
//delete jokes
delete(programming.jokes);
console.log(programming)
//add isFun, value true
programming.isFun = true;
console.log(programming)
//use map to add number in front of language
let prog = programming.languages.map(function(languages,index)
{
    return index + " - " + languages
}
);
console.log(prog);