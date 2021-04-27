/*// let js = 'shri';

// // if (js === 'shri') alert('Js is awesome');

// console.log(js)

//Starting from new from here everything is going on let's go boiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii


let name = "SHRI";
//console.log(name)

let firstName = "shrinivas";
//console.log(firstName);

let myName = 'shrinivas';
let myLastName = 'Sherikar'
//console.log(myName);
//console.log(myLastName);


// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);




//CODNG CHALLENEGE #1 is completed ....



//strings and Templete Literals


let firstName = ' Shri';
let birthYear = 2005;
let job = ' student';
let year = 2021;

let shri = "i'm" + firstName + ' ' + 'and' + ' ' + "i'm" + (year - birthYear) + ' ' + 'year old student' + '!'

console.log(shri)


//It is boaring so we are joing to use Templete Literals

let Shri = `I'm ${firstName} and i'm ${year - birthYear} year old student !`

console.log(Shri)

// Above method is more easy and convenient 


*/
// const age = 19;
// const validAge = age >= 18;

// if (validAge) {
// // console.log("you are valid");
// }

//////////////////////////////////////

// const birthYear = 2001;
// let century;
// if (birthYear >= 2000) {
//  let century = 21;
// } else {
//  let century = 20;
// }
// console.log(century);

////////////////////////////////////
//Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//  console.log("Mark's BMI is higher than John's !");
// } else {
//  console.log("John's BMI is higher than John's !");
// }

// if (BMIMark > BMIJohn) {
//  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) !`);
// } else {
//  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})  !`);
// }

/////////////////////////////////////////////////

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);
// type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" > "18");
// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

// let year = 1999;

// let newYear = String(year);

// let noyear = year > 2000;

// let string = "19999";

// let no = Number(string);

// let string_1 = "shri";

// let no_1 = Number(string_1);
// console.log(
//  typeof year,
//  typeof newYear,
//  typeof noyear,
//  typeof string,
//  typeof no,
//  typeof string_1,
//  typeof no_1
// );

// console.log(year, newYear, noyear, string, no, string_1, no_1);

//////////////////////////////////

//Truthy and Falsy values

//There are 5 FALSY values  0 , undefined , NaN , '' , null and also False ...

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(false));

// let money = 0;

// if (money) {
//  console.log("True");
// } else {
//  console.log("False");
// }


// let  age = 18 ;//Number

// if (age === 18 ) console.log('you are 18+')//Here JS follow strict rules and can't convert the string into number resulting into False action

// age = '18';//String
// if (age == 18 ) console.log('you are 18+')// here JS converts the STRING into Number and gives value as true 

// let no = prompt('Enter a Number!');

// // console.log(no)

// // console.log(typeof no)

// // if(no == 23) console.log('Cool');//here 23 is string as the value is in string

// if(no === 23 ) { //here 23 is string as here is === this value is false 
//   // console.log('cool')
// }else{
//   // console.log('not cool')
// }


// let con = Number(no);//we are converting the string into no

// // console.log(typeof con)

// if (con === 23 ) {//here as we recently converted the string into no here we get true value and our code would be activeted
//   // console.log('cool')
// } else {
//   // console.log('not cool')
// }

// if (con === 23) {
//   console.log('Cool')
// }else if(con === 7){
//   console.log('7 is also cool')
// }else if(con === 10 ){
//   console.log('jod or wat ?')
// }else {
//   console.log('you are noob')
// }

//Boolean Logic


//&& = AND
// let hasDrivingLicense = true //A

// let hasGoodVision = true //B

// console.log(hasDrivingLicense && hasGoodVision); // true and true = true 


// hasGoodVision = false ;

// console.log(hasDrivingLicense && hasGoodVision); // true and false = false

// //|| is use for OR 
// console.log(hasDrivingLicense || hasGoodVision); // true or false = true

// //! is use for NOT
// console.log(!hasGoodVision)// the value of (hasGoodVision) is false but due to NOT operator the value changes to True

// console.log(!hasDrivingLicense)// the value of (hasDrivingLicense) is true but due to NOT operator the value changes to False


// let hasDrivingLicense = true;
// let hasGoodVision = true;

// if( hasDrivingLicense && hasGoodVision){
//   console.log('YAY! You can drive !')
// }else{
//   console.log("NO! You can't drive")
// }//both the values are True hence the condition is also True hence if block is runned 

// //reassigning the values ....

// hasDrivingLicense = true;
// hasGoodVision = false;

// if (hasDrivingLicense && hasGoodVision) {
//   console.log('YAY! You can drive !')
// } else {
//   console.log("NO! You can't drive")
// } //as one of the value is false the condition is also false hence the effect is else 


// hasDrivingLicense = false;
// hasGoodVision = false;

// if (hasDrivingLicense && hasGoodVision) {
//   console.log('YAY! You can drive !')
// } else {
//   console.log("NO! You can't drive")
// } 

// //let's jump into 3 var problems 

// hasDrivingLicense = true
// hasGoodVision = false
// hasTired = false;

// //as all is true condition will also be true but as person is tired he can't drive so to make it FALSE use "!"

// if(hasDrivingLicense && hasGoodVision && !hasTired){
//   console.log("You can drive")
// }else{
//   console.log("Go and take rest")
// }

// if(hasDrivingLicense || hasGoodVision){
//   console.log('You can drive')
// }

//Switch

// let name =  "Anjali";

// //This Switch is same as IF-Else statement
// switch(name){
//   case 'Shri':
//     console.log("It's Shrinivas");
//     break;
//     case 'Anjali':
//       console.log("It's Anjali");
//     break;
//     default:
//     console.log("It's No one");
// };

// if(name === "Shri"){
//   console.log("It's Shrinivas");
// }else if (name === "Anjali"){
//   console.log("It's Anjali")
//   }else {
//     console.log("It's No one ");
//   }
// const day = "friday";

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

//Statement and Expression
//Exprssion

//23 + 13 +13 
//true && false && !false ;


//Statement
// let str;

// if (23 > 18){
//  str = "23 is bigger"; //but The str is expression as str produces the value
// }
// console.log(str);

//Conditional Statement 

//const age = 19;

// age >= 18 ? console.log("You can drink Wine ") : console.log("You can't drink Wine ");

// const isDrink = age >= 18 ? 'Wine' : 'Water';

// console.log(isDrink)

// if (isDrink === "Wine"){
// console.log("You are mature");
// }else if(isDrink !== "Wine"){
//  console.log("You are not Mature");
// }


// console.log(`I like to dirink ${age >= 18 ? 'wine' : 'Water'}`);
