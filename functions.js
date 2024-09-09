//condition 

// if 

// else
// else if

// switch 


// loops 

// for 

// while 

// do while 

// createUser(){

//     // block of clode 
// }


// function printmessage(){

//     console.log("This is small function")
// }

// printmessage()


//function without parameters / arguments

// function addtwonumbers(){

//     console.log("1st numbner is : "+ 9)
//     console.log("2nd numbner is : "+ 5)

//     console.log("Sum of two numbers is : "+ (9+5))

// }

//addtwonumbers()

//function with parameters / arguments 

function addtwonumbers(num1, num2){

    console.log("1st numbner is : "+ num1)
    console.log("2nd numbner is : "+ num2)

    console.log("Sum of two numbers is : "+ (num1+num2))

}


// addtwonumbers(23, 34)


// addtwonumbers(5, 6)

// addtwonumbers(38, 16)

//function with return keyword 

function printmessage(){

    return "Raju"
}

x = printmessage()

console.log(x)


function substract(num1, num2){

    return num1-num2
}

total = substract(34, 20)

console.log(total)

function createorder(){

    return "12345"
}


// createorder() === "12345"

str = "Raju"

function printordernumber(){

    console.log(createorder())
}


printordernumber()

// function - without paramns 

// function - with paramns 


// function - without paramns and with return 

// function - with paramns and with return 


//arrow functions 

//es6 version onwards arrow functions are introduced 


// function printmessage(){

//     console.log("This is small function")
// }

// printmessage()


displaydata = () =>{

    console.log("This is small function")
}


displaydata()


// function addtwonumbers(num1, num2){

//     console.log("1st numbner is : "+ num1)
//     console.log("2nd numbner is : "+ num2)

//     console.log("Sum of two numbers is : "+ (num1+num2))

// }


// addtwonumbers(23, 34)

sumvalue = (num1, num2) =>{

        console.log("1st numbner is : "+ num1)
    console.log("2nd numbner is : "+ num2)

    console.log("Sum of two numbers is : "+ (num1+num2))
}

sumvalue(23, 34)


// function squarerootofanumber(num){

//     return num*num

// }

// x = squarerootofanumber(9)

// console.log(x)

sqr = num => num*num

y = sqr(8)

console.log(y)