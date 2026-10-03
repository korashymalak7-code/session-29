let x : string ="malak";
console.log(x);

// array
{
    let y: number[] =[ 10,20,30];
    console.log(y);
    let y2 :Array<number> =[40,50,60];// geinerc
    console.log(y2);
    let y3 : [string , number] =["malak",10]; 

}
 
// function
{
    let z :() => number = function (){
        return 7 ;
    }
    console.log(z());

    let z2 : () => void = function (){
        console.log("ok");
    }
    z2();
    console.log(z2());

}

// union
let d : number | string ="";

// oop 
{
    // class is stander frame of object 
    class User {
        public name : string ='notName';
        public age : number =NaN;

        public constructor  (age : number){
            console.log("constructor");
            console.log("this =" , this); // this is a instance object
            console.log("this.age =" , this.age);
            console.log("age =" , age);
            this.age = age
            console.log("this.age (new) = " ,  this.age);
            console.log("this 2=" ,  this);
        }
        public fun1(){
            console.log("run");
        }
    }


    let u1 : User = new User(19);
    u1.fun1();
    console.log(u1.name);
    console.log(u1.age);

    let u2 : User = new User(20);
    u2.fun1();
    console.log(u2.name);
    console.log(u2.age);
    u2.age=30;
    console.log("new age",u2.age);
    // ______________________

    console.log("new User =",new User(21));

    console.log(u1.age);

    // u1 or u2 is stored in stack as pointer to refare to object refrance in heap 

}