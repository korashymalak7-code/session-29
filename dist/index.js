"use strict";
let x = "malak";
console.log(x);
let y = [10, 20, 30];
console.log(y);
let y2 = [40, 50, 60]; // ginaric
console.log(y2);
let y3 = ["malak", 10];
let z = function () {
    return 7;
};
console.log(z());
let z2 = function () {
    console.log("ok");
};
z2();
console.log(z2());
// union
let d = "";
// ------------------ oop ------------------
class User {
    name = 'notName';
    age = NaN;
    constructor(age) {
        console.log("constructor");
        console.log("this =", this);
        console.log("this.age =", this.age);
        console.log("age =", age);
        this.age = age;
        console.log("this.age (new) = ", this.age);
        console.log("this 2=", this);
    }
    fun1() {
        console.log("run");
    }
}
let u1 = new User(19);
u1.fun1();
console.log(u1.name);
console.log(u1.age);
let u2 = new User(20);
u2.fun1();
console.log(u2.name);
console.log(u2.age);
u2.age = 30;
console.log("new age", u2.age);
// ______________________
console.log("new User =", new User(21));
console.log(u1.age);
//# sourceMappingURL=index.js.map