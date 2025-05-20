"use strict";
class Book {
    constructor(name, pages) {
        this.name = name;
        this.pages = pages;
    }
    read() {
        console.log("reading");
    }
    getDetails() {
        return `Name: ${this.name}, Pages: ${this.pages}`;
    }
}
const myBook = new Book("python", 10);
const anotherBook = new Book("java", 15);
console.log(myBook.name);
console.log(myBook.pages);
myBook.read();
console.log(myBook.getDetails());
class usermanual extends Book {
    constructor(name, pages, manual) {
        super(name, pages);
        this.manual = manual;
    }
    use() {
        console.log("must follow");
    }
    buy() {
        console.log("not available");
    }
    getDetails() {
        return `${super.getDetails()}, manual: ${this.manual}`;
    }
}
const myusermanual = new usermanual("geetha", 500, "ourmanual");
console.log(myusermanual.name);
console.log(myusermanual.pages);
myusermanual.use();
console.log(myusermanual.manual);
myusermanual.buy();
console.log(myusermanual.getDetails());
//# sourceMappingURL=learn.js.map