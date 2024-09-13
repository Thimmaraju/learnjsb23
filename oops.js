
// function add (){

//     console.log("2")
//     console.log("6")
//     console.log((2+6))
// }

// add()

//===================================================

// class calculator {

//      x = 10

//      studename =  "Raju"

//     add (num1, num2){

//         console.log(num1)
//         console.log(num2)
//         console.log(num1+num2)
//     }

//     substract (){

//         console.log("2")
//         console.log("6")
//         console.log((2-6))
//     }

//     Multiply(){

//         console.log("2")
//         console.log("6")
//         console.log((2*6))
//     }

//     devide (){

//         console.log("2")
//         console.log("6")
//         console.log((2/6))
//     }
// }


// const cal1 = new calculator()

// cal1.add(34,67)

// cal1.add()

// console.log(cal1.studename)

// cal1.add()


// cal1.devide()

// const pavan = new calculator()

// pavan.add()

// Encapsulation 

// Inhertance 

// Polymorphism 

// Prototyping 

//======================================

// class classanme {

//     // variables 
//     //methods 


// }

//const objectname = new classname() // Object of the class or Instance of the class 

//with objectname we access variables and methods inside a class 

// class 

// object 
// with object you access methods and variables 

// n number of objects you can create for the same class 

// cal1

// cla2

// constructor

// this keyword 

//static

// class student{

// stuname


//    constructor(num1, num2){

//         console.log(num1)
//         console.log(num2)
//         console.log("sum of 2 numbers is : "+ (num1+num2))
//    }

//    m1(){

//        console.log("this is a M1 method")
//    }

//    details(value1, value2, value3 ){

//        this.studename = value1
//        this.stuplace = value2
//        this.stucourse = value3

//    }

//    printdetrails(){

//       console.log(this.studename)
//       console.log(this.stuplace)
//       console.log(this.stucourse)
//       this.m1()

//    }


//     multiply(num1, num2){

//         return num1*num2
//     }
// }

// const st1 = new student(24, 34)

// //console.log(st1.multiply(4,4))

// st1.details("raju", "blr", "WDIO")

// st1.printdetrails()
//const st2 = new student(2,7)

//st1.details()

//console.log(st1.studename)

//st1.printdetrails()

//constructor is a method

// we dont need to call the constructor / Invoke 

// It will automatically invoked, when create instance/ object of the class 

// can we create more than one constructor 

//ans: In JS - Multiple constructor is not allowed 

//by default a empty constructor will there 

// class A {

//     static m1() {

//         console.log("This is a M1 Method ")
//     }

//     m2() {

//         console.log("This is a M2 Method ")
//     }

//     static  m3() {

//         console.log("This is a M3 Method ")
//     }

//     m4() {

//         console.log("This is a M4 Method ")
//     }

//     m5() {

//         console.log("This is a M5 Method ")
//     }

// }



//for accessing static method we dont need create object at all 

// static methods can be accessed with the classname only 

// A.m1()

// A.m3()

// //But to access non static methods we have to create object of class

// const emp1 = new A()

// emp1.m5() // m5 here is a non static method

//Inheritance 

// class A {

//     static m1() {

//         console.log("This is a M1 Method ")
//     }

//     m2() {

//         console.log("This is a M2 Method ")
//     }

//     m3() {

//         console.log("This is a M3 Method ")
//     }

//     m4() {

//         console.log("This is a M4 Method ")
//     }

//     m5() {

//         console.log("This is a M5 Method ")
//     }

// }


// class B extends A{

//     m6() {

//         console.log("This is a M6 Method ")
//     }
// }


// class C extends B{

//     m7() {

//         console.log("This is a M7 Method ")
//     }
// }


//  const obj = new C()

// obj.m2()  // A
// obj.m6()  // B
// obj.m7() // C

// //Prototype 



// class xyz {

//     num1 = 10

//     m1() {

//         console.log("This is a M1 Method ")
//     }

//     m2() {

//         console.log("This is a M2 Method ")
//     }

//     m3() {

//         console.log("This is a M3 Method ")
//     }

//     m4() {

//         console.log("This is a M4 Method ")
//     }

//     m5() {

//         console.log("This is a M5 Method ")
//     }

// }


// xyz.prototype.num2 = 30

// xyz.prototype.m6= function(){

//     console.log("This is a M6 Method ")

// }

// const raju = new xyz()

// const ravi = new xyz()

// const pavan = new xyz()

// const mounesh = new xyz()

// raju.m1()

// raju.m6()
// console.log(raju.num1)
// console.log(raju.num2)

// console.log(pavan.num2)



class employee{

     display(){

        console.log("this is a Parent class method")
     }

     add(raju,ravi){

           console.log(raju)
           console.log(ravi)

           console.log(raju+ravi)
     }
}

class Admin extends employee{

   
    display(){

        console.log("this is a child class method")
     }

     printmessage(){

        console.log("this is simple method from Admin")
     }

     add(raju, ravi, pavan){

        console.log(raju)
        console.log(ravi)
        console.log(pavan)

        console.log(raju+ravi+pavan)
     }


}

const xyz = new employee()

xyz.display()  // Method Overriding 

xyz.add(4,6,9) // Method overloading 

//async

//await 

// callbacks 

// Promises 

// set 
// maps 

//==================================

// notes 

// meterials 

// Interview questions JS 

// Interview Questions cypress 


// 50 recorded Audio



