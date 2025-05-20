/*//typescript advantages:
//static typing:
function wishing(name: string): string {
  return `Hello, ${name.toUpperCase()}!`;
}

console.log(wishing("divya"));   
//console.log(wishing(10));  

//data types
let sale:number = 123;
let item_name: any= 'pen'; 
let isavailable = 'true';
let prebook;

//special types

let n: null = null;
let x: undefined = undefined;

// With strictNullChecks disabled:
let num: number = null;
let str: string = undefined;

// With strictNullChecks enabled:
 //let num: number = null;
 //let str: string = undefined; 

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 

let lst:(string|number|boolean)[] = [ "free", 'true',10,true,"hjgf",10];
let lst1:(number|string|boolean)[] = [ "free", 'true',10,true,"hjgf",10];
let lst2:(number|string|boolean)[] = [ 1,2,3,4,5];
//the array which having elements of different types
//lst is a array which can have the elements of  any of string and boolean and number type may or may not be all
//lst is a array which can have the elements of  type string or boolean or number 
let notKnown: unknown = 45;

if (typeof notKnown === "string") {
  console.log(notKnown.toUpperCase());
}
 else if (typeof notKnown === "number") {
  notKnown++;           
  console.log(notKnown); 
}
 else{
  console.log("The variable is neither a string nor a number.");
 }
let Value: unknown = 123;
let pen: number = Value as number; 
console.log(pen + 1);

//union type
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


//arrays
let nu = [1,45,'s',true,433444]
console.log(nu[2]);
//spread
let man:[string,...number[]]=['siva',1,1234,45,44,];//due to using rest syntax it accepting the elements of number type becausse we used[] 
let man1:[string,number[]]=['siva',[1,1234,45,44,444]];//it is taking only 2 elemnts and second element is actually array but considered as a element
man.push(455);
console.log(man);

const nam: readonly string[] = ["dog","cat"];
//nam.push("Jack"); 

 //TypeScript allows the use of the push() method on tuples, 
 // even though it adds elements beyond the initially defined fixed length. 
 // This is a point of discussion and a deviation from the strict "fixed size" concept at the type level. 
 // The type of the tuple might even widen to include the type of the pushed element.




let myTuple: [number, boolean, string] = [100, true, 'hello'];
console.log('Initial tuple:', myTuple); 
myTuple.push('world');
console.log('After push():', myTuple); 
myTuple.push(45);
console.log('After push():', myTuple);
/*console.log('After unshift():', myTuple); 
myTuple.unshift('new');
console.log('After another unshift():', myTuple); 
myTuple.splice(1, 1, false); 
console.log('After splice():', myTuple);

*/
//objects
/*const van: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
console.log(van);

//type alias
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel,
  trip():void; 
}
interface Car1  {
  year: number;
  type: string;
  model:string;
  trip():void; 

  
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(carYear);

//interface
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
console.log(rectangle);
//
interface User {
firstName: string;
age: number;
city: string;
}
const userTs: User = {
  firstName: "Divya",
  age: 22,
  city: "akp"

};
function emp5(person: User): void {
console.log("Name:", person.firstName);
// console.log("Age:", person.Age); 
console.log("Age:", person.age);
console.log("City:", person.city);
}
emp5(userTs); 

function emp4(person: User): void{
  console.log("name:",person.firstName);
  console.log("age:",person.age);
  console.log("city:",person.city);
}
  emp4({firstName:"sivaji",age:30,city:"ylm"});



//extending interface
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
console.log(coloredRectangle);
console.log(coloredRectangle.color);



//enums
enum CardinalDirections {
  North1,
  East1,
  South1,
  West1
}
let currentDirection = CardinalDirections.North1;
console.log(currentDirection);
 
//intialized enum
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}

console.log(CardinalDirections.North);
console.log(CardinalDirections.West);


//fully intialized

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.NotFound);

// void 
function log(message:string):void{
  console.log(message);
}
//never
function logAndThrow(errormessage:string):never{
  console.log(errormessage);
  throw new Error(errormessage);
}

//function as type
type subscriber = {
  identity: string;
  age:number;
  greet:() => string;
}
let subscriber ={
  identity: "uday",
  age: 27,
  greet() {
    console.log("hello,how are you");
  }

}
subscriber.greet();*/

// type InvestmentData = {
//   initialAmount: number;
//   annualContribution: number;
//   expectedReturn: number;
//   duration: number;
// }

// type InvestmentResult = {
//   year:string;
//   totalAmount:number;
//   totalcontributions: number;
//   totalInterestEarned: number;
// }
// type calculationResult = InvestmentResult[] | string;

// function calculateInvestment(data: InvestmentData): calculationResult {
//   const{initialAmount, annualContribution, expectedReturn, duration} = data;

//   if (initialAmount < 0) {
//     return 'intial investment amount must be at least zero'
//   }
// if (data.initialAmount < 0) {
//     return 'intial investment amount must be at least zero'
//   }

//   if (duration <= 0){
//     return 'no valid amount of years provided'
//   }
//   if (expectedReturn < 0) {
//     return'expected return must be at least zero'
//   }

//   let total = initialAmount;
//   let totalcontributions = 0;
//   let totalInterestEarned = 0;

//   const annualResults: InvestmentResult[] = [];

//   for (let i = 0; i < duration; i++){
//     total = total * (1 + expectedReturn); 
// totalcontributions += annualContribution; 
// total += annualContribution;          
// totalInterestEarned = total - totalcontributions - initialAmount; 

//     annualResults.push({
//       year: `Year ${i+1}`,
//       totalAmount: total,
//       totalInterestEarned,
//       totalcontributions
//     });
//   }
//   return annualResults;
// }
 
// function printResults(results: calculationResult){
//   if (typeof results === 'string'){
//     console.log(results);
//     return;
//   }

//   for (const yearEndResult of results){
//     console.log(yearEndResult.year);
//     console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
//     console.log(`Total contributions: ${yearEndResult.totalcontributions.toFixed(0) }`);
//     console.log(`Total Interest Earned: ${ yearEndResult.totalInterestEarned.toFixed(0)}`);
//     console.log('----------------------');
//   }
// }

// const investmentData: InvestmentData = {
//   initialAmount: 120000,
//   annualContribution:1000,
//   expectedReturn: 0.09,
//   duration: 10
// };
// const results = calculateInvestment(investmentData)
// printResults(results);
// 



// generic constraints

interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(obj: T): void {
  console.log(`Length: ${obj.length}`);
}

printLength("hello");   
printLength([1, 2, 3]); 
printLength({ length: 10, value: "test" }); 

// printLength(123); 
// printLength({ value: "test" }); 
//Static properties
class MathUtil {
  static PI: number = 3.14;

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.calculateArea(5)); // Output: 78.5