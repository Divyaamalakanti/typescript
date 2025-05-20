//typescript advantages:
//static typing:
function wishing(name) {
    return "Hello, ".concat(name.toUpperCase(), "!");
}
console.log(wishing("divya"));
//console.log(greetTs(10));  
//data types
var sale = 123;
var item_name = 'pen';
var isavailable = 'true';
var prebook;
//special types
var n = null;
var x = undefined;
// With strictNullChecks disabled:
var num = null;
var str = undefined;
// With strictNullChecks enabled:
//let num: number = null;
//let str: string = undefined; 
//any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var lst = [1, "free", true];
var notKnown = "sivaji";
// console.log(notKnown.toUpperCase()); 
if (typeof notKnown === "string") {
    console.log(notKnown.toUpperCase());
}
var Value = 123;
// let num: number = value; 
var pen = value;
console.log(pen + 1);
//union type
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
//arrays
var nu = [1, 45, 's', true, 433444];
console.log(numbers[2]);
var man = ['siva', 1, 1234, 45, 44, 444];
user.push(455);
console.log(man);
var nam = ["Dylan"];
//names.push("Jack"); 
var myTuple = [10, true, 'hello'];
console.log('Initial tuple:', myTuple);
myTuple.push('world');
console.log('After push():', myTuple);
var poppedElement = myTuple.pop();
console.log('After pop():', myTuple);
console.log('Popped element:', poppedElement);
var shiftedElement = myTuple.shift();
console.log('After shift():', myTuple);
console.log('Shifted element:', shiftedElement);
myTuple.unshift(5);
console.log('After unshift():', myTuple);
myTuple.unshift('new');
console.log('After another unshift():', myTuple);
myTuple.splice(1, 1, false);
console.log('After splice():', myTuple);
myTuple.splice(0, 0, -1);
console.log('After another splice():', myTuple);
console.log('Element at index 0:', myTuple[0]);
console.log('Element at index 3:', myTuple[2]);
console.log('Length of tuple:', myTuple.length);
//objects
var van = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(van);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(carYear);
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var userTs = {
    firstName: "Divya",
    age: 22,
    city: "akp"
};
function emp5(person) {
    console.log("Name:", person.firstName);
    // console.log("Age:", person.Age); // TypeScript Error: Property 'Age' does not exist on type 'User'. Did you mean 'age'?
    console.log("Age:", person.age);
    console.log("City:", person.city);
}
emp5(userTs);
function emp4(person) {
    console.log("name:", person.firstName);
    console.log("age:", person.age);
    console.log("city:", person.city);
}
emp4({ firstName: "sivaji", age: 30, city: "ylm" });
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
console.log(coloredRectangle.color);
//enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North1"] = 0] = "North1";
    CardinalDirections[CardinalDirections["East1"] = 1] = "East1";
    CardinalDirections[CardinalDirections["South1"] = 2] = "South1";
    CardinalDirections[CardinalDirections["West1"] = 3] = "West1";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North1;
console.log(currentDirection);
//intialized enum
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
//fully intialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
