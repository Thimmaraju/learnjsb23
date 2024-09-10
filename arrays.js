
// arr = []   // empty array


// arr2 = [2,6,4,3,5, 7,9]

// arr3 = ["raju", 31, "blr", true]

// arr4 = ["raju", 
//     {

//         username : "Admin",
//         password: "admin123"
//     }

// ]

// console.log(arr2.length)

// //index always startsn from 0 

// console.log(arr4[1])

// arr5 = ["zyx", "raju", "pavan", "ajay","345" ,"darshan", "anusha"]

// //concatination // joining 2 arrays 

// // arr6 = arr3.concat(arr5)

// // console.log(arr6)

// //sorting of array elament 

// // arr7 = arr5.sort()

// // console.log(arr7)


// // reverse the array elements 

// // arr8 = arr5.reverse()

// // console.log(arr8)

// //str = "Raju" // "ujaR"

// //convert string to array

// // str = "Javascript"

// // arr9 = str.split("")

// // console.log(arr9)

// // // convert array to string 

// // st2 = arr5.join("")

// // console.log(st2)

// str3 = "this is a js calss"

// // revstr = str3.split("").reverse().join("")

// // console.log(revstr)
 

// arr11 = str3.split(" ")

// console.log(arr11)

// prices = [9, 7,8 ,6,5,5,4]

// sortedprices = prices.sort().reverse()

// console.log(sortedprices)

// if(prices == sortedprices){

//     console.log("prices are highest  to lowest")
// }
// else{

//     console.log("prices are not in order of highest  to lowest")
// }


// prices2 = [9, 7,8 ,6,5,5,4]


// //add element to array at the end  - Push 

// prices2.push("Raju")

// prices2.push(10)

// console.log(prices2)

// //Unshift() - add element to array at the beginning 

// prices2.unshift("sunil")

// console.log(prices2)

// //replace a element 

// prices2[0] = "darshan"
// console.log(prices2)

// // remove the element at the end  - pop()

// prices2.pop()
// prices2.pop()

// console.log(prices2)

// // shift() - remove the element at the beginning 

// prices2.shift()
// prices2.shift()
// prices2.shift()
// console.log(prices2)

// arr = [2,9,8,7,5]

// // find the index of max number 

// console.log(arr.indexOf(9))

// arr2 = arr.sort()

// console.log(arr2)

// console.log(arr)


// console.log(arr2[arr2.length-1])

// console.log(arr.indexOf(arr2[arr2.length-1]))

//  str = "this  is  javascript class"

//  output = "siht si tpircsavaj ssalc"


// 70 % - cypress 

// 30 - 

//  20 - JS 

//  10 - Manual 

// 1 to 100 

// divisible 3 - fizz 

// divisible by 5 - buzz 

// divisible by 3 and 5 - fizzbuzz \

// otherwise just print number 

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz 
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz


for(let i=1; i<=100; i++){

    if( (i % 3 == 0) && (i%5 ==0)){

        console.log("fizzbuzz")
    }

    else if(i % 3 == 0){
        console.log("fizz")
    }

    else if(i % 5 == 0){
        console.log("buzz")
    }

    else {

        console.log(i)
    }
}


// palindrome or not 

// str = "madam"  // palindrome

// str2 = "Javascript" // not palindrome


// str = "rar"


// revstr = str.split("").reverse().join("")

// if(str == revstr){

//     console.log("Given string is a palindrom")
// }
// else{
//     console.log("Given string is not a palindrom")

// }

//anagram 

//  str1  = "aaarrrppqq"
//  str2 = "qqrrrppaaa"

//  str3 = str1.split("").sort().join("")   //amry




//  str4 = str2.split("").sort().join("") //amry



//  if(str3 == str4){

//     console.log("Given strings are anagrams")
// }
// else{
//     console.log("Given strings are not anagrams")

// }

//convert celius to degree 


//arr = [1,2,4,5,6]

// arr2 = [a,b,c]

// output : [1,a,2,b,4,c,5, 6]

// arr = [1,2,4,5,6]

// arr2 = [a,b,c,d,e,f,g]

// output : [1,a,2,b,4,c,5,d,6,e,g]


arr = [1,4]  // 

//const array2 = new Array("eat", "sleep");

arr = new Array(1,4) // decalring arrays a object 


arr3 = ["Raju", "Sunil", "Darshan", "xyz"]

arr3.forEach(element => {
    
    console.log("loop starts here")
    console.log(element)
    console.log("loop ends here")
});

//datadriven  testing 

// arr = [
//     {
//          username: "Admin",
//          password: "admin123"
//     },
//     {
//         username: "Admin1",
//         password: "2234oru"
//    },
//    {
//     username: "Admiewrfhbn",
//     password: "kmhrgf"
// },
// {
//     username: "kjfwberw",
//     password: "mrfhb"
// },

// ]

  

//  {

//     cy.visit("/web/index.php/auth/login")
      
//       cy.get("input[name='username']").type("kjfjhje")
  
//       cy.get("input[type='password']").type("admin123")
  
//       cy.get("button[type='submit']").click()
  
//       cy.contains('Invalid credentials').should("be.visible")

//  }




arr3 = ["abc", "Raju", "Sunil", "Darshan", "xyz"]

if(arr3.includes("Anusha")){

    console.log("element present")
}
else{
    console.log("element not present")

}

// arr4 = arr3.slice(4)

// console.log(arr4)


arr5 = arr3.splice(1,3)

console.log(arr5)



//  filter 

// reduce 

// map 












