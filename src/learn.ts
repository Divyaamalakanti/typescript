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
//   const{initialAmount ,annualContribution, expectedReturn, duration} = data;

//   if (initialAmount < 0) {
//     return 'intial investment amount must be at least zero'
//   }
// //if (data.initialAmount < 0) {
// //     return 'intial investment amount must be at least zero'
// //   }

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



class Dog {
  name: string;
  breed: string;
  age: number;
  isSleeping: boolean = false;


  constructor(name: string, breed: string, age: number) {
    
   
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  /**
   * Simulates the sound of a bark and This method outputs the string "Woof! Woof!" to the console.
   */
  bark(): void {
    console.log("Woof! Woof!");
  }

  /**
   *  purpose to set the object state to sleeping and it will log a message to indiacate change  
   */
  sleep(): void {
    this.isSleeping = true;
    console.log(`${this.name} is now sleeping.`); 
  }
  /**
   * sample method that takes two parameters and returns the first parameter
   * @param p1 first parameter
   * @param p2 second parameter
   * @returns returns first parameter
   */

test1(p1:number, p2:string):number{
 return p1;
}

  /**
   * This method returns a string containing the object's name, breed, and age,
   * formatted as "Name: [name], Breed: [breed], Age: [age]".
   * @returns A string containing the object's information.
   */
  getInfo(): string {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}`;
  }
}


const myDog = new Dog("Buddy", "Golden Retriever", 3);
const anotherDog = new Dog("Lucy", "Poodle", 5);


console.log(myDog.name);        
console.log(anotherDog.breed);


myDog.bark();                   
anotherDog.sleep();
console.log(anotherDog.isSleeping); 
myDog.getInfo();


//accessing modifiers 
class Animal {
  public name: string;       
  private age: number;       
  protected species: string; 
  sound:string;
  constructor(name: string, age: number, species: string, sound:string) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.sound = sound;
  }

  public makeSound(): void {
    console.log(`${this.name} says: ${this.sound}`);
    this.displayInternalInfo(); 
  }
public getSound(): string {
  return this.sound;
    
  }
  private displayInternalInfo(): void {
    console.log(`(Internal info: Age - ${this.age})`);
  }

  protected getSpecies(): string {
    return this.species; 
  }
}

class Dogg extends Animal {
  public breed: string;

  constructor(name: string, age: number,Sound:string, breed: string) {

    super(name, age, "Canine",Sound); 
    this.breed = breed;
   // super(name, age, "Canine"); 
  }

  public bark(): void {
    this.makeSound();
        console.log(`Breed: ${this.breed}, Species: ${this.getSpecies()}`); 
        
  }


}

const myAnimal = new Animal("Generic", 5, "Unknown","meow");
console.log(myAnimal.name);
const sounding  = myAnimal.getSound();
console.log(sounding);        
myAnimal.makeSound(); 
//console.log(myAnimal.age)      
// console.log(myAnimal.species);
//myAnimal.displayInternalInfo();
// myAnimal.getSpecies();

const myDogg = new Dogg("Buddy",3, "hoo","Golden Retriever");
console.log(myDogg.name);         
myDogg.bark();                    
//console.log(myDogg.age);
// console.log(myDog.species);
//myDogg.displayInternalInfo();



//getter and setter:
class Circle {
  private _radius: number; 
  constructor(radius: number) {
    this._radius = radius;
  }

  
  get radius(): number {
    return this._radius;
  }

 /**
  * 
  */
  set radius(newRadius: number) {
    if (newRadius <= 0) {
      throw new Error("Radius cannot be zero or negative.");
    }
    this._radius = newRadius;
  }


  get area(): number {
    return Math.PI * this._radius * this._radius;
  }
}
const circle1 = new Circle(5);
console.log(`Circle 1 Radius: ${circle1.radius}`); 
console.log(`Circle 1 Area: ${circle1.area}`);   

circle1.radius = 10;
console.log(`Circle 1 New Radius: ${circle1.radius}`);
console.log(`Circle 1 New Area: ${circle1.area}`);
try {
  circle1.radius = -2;
} catch (error: any) {
  console.error(`Error: ${error.message}`);
}

console.log(`Circle 1 Radius after attempt: ${circle1.radius}`); 



//abstract classes:

abstract class Animals {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}
class cat extends Animals {
  makeSound(): void {
  console.log("Bark");
  }
}

const dog = new cat();
dog.makeSound(); 
dog.move();     



//intersection of function overload 
type StringConverter = (input: string) => string;
type NumberConverter = (input: number) => string;

const converter: StringConverter & NumberConverter = (input: string | number) => input.toString();
console.log(converter(123));
 

//intersection of interface
interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

type FlyingCar = Drivable & Flyable;

// const myVehicle: FlyingCar = {
//   drive: () => console.log('Driving'),
//   fly: () => console.log('Flying'),
// };
const myVehicle = {
  speed: 100,
  
  drive() {
    console.log(`Driving at ${this.speed} km/h`);
  },
  
  fly(){
    console.log(`Flying at ${this.speed} km/h`);
  }
  
};

myVehicle.drive(); 
myVehicle.fly();   



// //function overloading
// function greet(): string;
// function greet(name: string): string;
// function greet(name: string, age: number): string;
// function greet(name?: string, age?: number): string{
//   if (name && age !== undefined) {
//     return `Hello, ${name}! You are ${age} years old.`;
//   } else if (name) {
//     return `Hello, ${name}!`;
//   } else {
//     return "Hello!";
//   }
// }

console.log(greet());               
console.log(greet("Alice"));        
console.log(greet("Bob", 30));      


//type of operator in typeguards
function processValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

processValue('Hello'); // Output: HELLO
processValue(123.456); // Output: 123.46


//instance of operator
class fox {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

// function makeSound(animal: fox | Cat) {
//   if (typeof animal === fox) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

makeSound(new fox()); // Output: Woof!
makeSound(new Cat()); // Output: Meow!


class Book {
   
    name: string;
    pages: number;

    constructor(name: string, pages: number) {
        this.name = name;
        this.pages = pages;
    }

    read(): void {
        console.log("reading");
    }

    getDetails(): string {
        return `Name: ${this.name}, Pages: ${this.pages}`;
    }
}
const myBook = new Book("python", 10);
const anotherBook = new Book("java", 15);
console.log(myBook.name);     
console.log(myBook.pages);      
myBook.read();           
console.log(myBook.getDetails()); 

class UserManual extends Book {
   manual : string;

    constructor(name: string, pages: number, manual: string) {
        super(name, pages); 
        this.manual = manual;
    }

    
    use(): void {
        console.log("must follow");
    }

    buy(): void {
        console.log("not available");
    }

    getDetails(): string {
        return `${super.getDetails()}, manual: ${this.manual}`; 
    }
}
const myusermanual = new UserManual("geetha", 500, "ourmanual");
console.log(myusermanual.name);       
console.log(myusermanual.pages);        
myusermanual.use();             
console.log(myusermanual.manual);     
myusermanual.buy();                  
console.log(myusermanual.getDetails()); 

// why generics needed


function getFirstNumber(arr: number[]): number | undefined {

 return arr.length > 0 ? arr[0] : undefined;

}
function getFirstString(arr: string[]): string | undefined {
return arr.length > 0 ? arr[0] : undefined;

}
const numbers = [1, 2, 3];
const firstNumber = getFirstNumber(numbers); 
const strings = ["a", "b", "c"];
const firstString = getFirstString(strings); 



// with generics

function getFirstElement<d>(arr: d[]): d | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const numbersarr = [1, 2, 3];
const first_Number = getFirstElement(numbersarr); 

const stringsarr = ["a", "b", "c"];
const first_String = getFirstElement(stringsarr); 

const booleans = [true, false];
const firstBoolean = getFirstElement(booleans); 

const users = [{ id: 1, name: "divya" }];
const firstUser = getFirstElement(users); 


//generic interface

interface Box<T> {
  contents: T;
}

const numberBox: Box<number> = { contents: 10 };
const stringBox: Box<string> = { contents: "hello" };

console.log(numberBox.contents); 
console.log(stringBox.contents); 


//generic class

// class Container<T> {
//   private items: T[] = [];

//   addItem(item: T): void {
//     this.items.push(item);
//   }

//   getFirstItem(): T | undefined {
//     return this.items.length > 0 ? this.items[0] : undefined;
//   }

//   getItems(): T[] {
//     return this.items; 
//   }
// }

const numberContainer = new Container<number>();
numberContainer.addItem(1);
numberContainer.addItem(2);
const firstNumberInContainer = numberContainer.getFirstItem(); 

const stringContainer = new Container<string>();
stringContainer.addItem("apple");
stringContainer.addItem("banana");
const firstStringInContainer = stringContainer.getFirstItem(); 

// switch case
// method as a parameter
// while loop