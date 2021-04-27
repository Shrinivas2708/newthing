//Functions
// function name(){
//     console.log("My name is Shri")
// }
// name();//this is called as function calleing we can call a fun as many times we want

// function fruit(apples, oranges) {
//     // console.log(apples, oranges)
//     let juice = `The juice of ${apples} apples and ${oranges} oranges !`;
//     return juice; //make sure whenever you create any variable in function make sure to return that otherwise you will get an error
// }

// // fruit(5, 0)//Here it only assigns value but can't return JUICE statement so to do that we need to make a new var and add this fun. name and parameters as value then it will return the juice value

// const appleJuice = fruit(5, 0);
// // console.log(appleJuice);

// // Now we can assign multipl values for apples and oranges and get different output like this 

// const appleOrangeJuice = fruit(10, 0)
// // console.log(appleOrangeJuice);


// //Function Declaration vs. Funtion Expression


// // Function Declaration
// //With variable
// function calcAge1(birthYear) {
//     const age = 2021 - birthYear;
//     return age;

// }

// let realAge1 = calcAge1(2000);
// console.log(realAge1);


// //Without Variable
// function calcAge2(birthYear) {
//     return 2021 - birthYear;

// }
// let realAge2 = calcAge2(2000);
// console.log(realAge2);

// //Function Expression

// const calcAge3 = function (birthYear) {
//     return 2021 - birthYear;
// }

// let realAge3 = calcAge3(2000)
// console.log(realAge3);

//Arrow Funtion

// const calcAge4 = birthYear => 2021 - birthYear;

// let realAge4 = calcAge4(2000);
// console.log(typeof calcAge4)
// console.log(realAge4)

// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 55 - age;
//     return retirement;
// } 

// console.log(yearsUntilRetirement(2000));

// const yearsUntilRetirement = (birthYear, firstName) => {
// const age = 2021 - birthYear;
// const retirement = 55 - age;
// return `${firstName} is retires in ${retirement} years !`;
// } 

// console.log(yearsUntilRetirement(2000, "Shri"));


//Function Calling Function 

// function slicer(fruit) {
//     return fruit * 4 ;
// };

// function fruitJuicer (apple, orange){
//     const appleJuice = slicer(apple);
//     const orangeJuice = slicer(orange);
//     const juice = `This is the Juice of ${appleJuice} slices of apple and ${orangeJuice} slices of orange !`;
//     return juice;
// }


// console.log(fruitJuicer(10, 2))



//Revision on Functions
// const calcAge = function (year) {
//     return 2021 - year;
// }

// const calcRetirement = function (age) {
//     return 55 - age;
// }


// const yearsUntilRetirement = function (birthYear) {
    // const age = calcAge(birthYear)
    // const retirement = calcRetirement(age)
//     return retirement;
// }

// console.log(yearsUntilRetirement(2000));
// console.log(typeof yearsUntilRetirement(2000));

// const calcAge = function (year) {
//     return 2021 - year;
// }

// const calcRetirement = function (age) {
//     return 55 - age;
// }


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear)
//     const retirement = calcRetirement(age)

//     if (retirement > 0) {
//         return retirement;       
//     }else{
//         return 'YoU are done ';
//     }
//     // return `${firstName} is retires in ${retirement} years !`;
// } 

// console.log(yearsUntilRetirement(1950, "Shri"));

// function calcAge(birthYear, name) {
//     const age = 2021 - birthYear;
//     console.log (`${name} is ${age} years old !`);
//     return age;
// }
// const age = calcAge(2005, "Shrinivas")
// console.log(age)



// function calcAverage(score1, score2, score3){
//     const average = (score1 + score2 + score3) / 3;
//     return average;
// }

function checkWinner(score1, score2, score3) {
    
}

let avgDolphin = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphin, avgKoalas)