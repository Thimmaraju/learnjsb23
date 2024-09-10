
str = '' // empty string 

console.log(typeof(str))

str = "Raju"

// ''

// " "

// ``


str3 = "Raju  Bangalore "

console.log(str3)

console.log(str3.length)

arr = str3.split("")

console.log(arr)

// arry to string  -- join()

console.log(str3[3])

console.log(str3.charAt(3))

arr = [2,5,6,7,9]

arr[1] = 89

console.log(arr)

// string - can not replace a particular char

str4 = "Raju"

str4[0]= "r"

console.log(str4)



var type1 = "COD" 

var type2 = "Creditcard"

var type3 = "BankPayment"

// it("verify order with ")

// it("verify order with Creditcard")

// it("verify order with BankPayment")
arr6 = ["COD", "Creditcard", "BankPayment"]

arr6.forEach(element => {
    
    str5 = `verify order with ${element}`
    console.log(str5)
});

// arr5 = ["COD", "Creditcard", "BankPayment"]

// arr5.forEach(element => {
    
//     console.log("loop starts here")
//     console.log(element)
//     console.log("loop ends here")
// });



var type = "COD"

var str6 = "verify order with "

// str7 = str6 + type
// console.log(str7)

str8 = str6.concat(type)

console.log(str8)

// toLowerCase() - to convert all char tom lowercase

str9 = "THIS is A JS claSS"

str10 = str9.toLowerCase()

console.log(str10)

str11 = str9.toUpperCase()

console.log(str11)


str11  = "raju place     bangalore   "

st12 = str11.trim() 

console.log(str11)

console.log(st12)

// to re,move the white spaces at the beginning and at the end

st13 = str11.substring(0,3)

console.log(st13)

price = Number('₹58,999'.replace("₹", "").replace(",", ""))

delivery = Number('40')

total = price + delivery

console.log(total)

str11  = "raju place     bangalore"

if(str11.includes("pavan")){

    console.log("sub string you are looking is presnt")
}
else{
    console.log("sub string you are looking is not presnt")

}


st23 = str11.slice(0,4)

console.log(st23)


str = "Raju\tPavan"

console.log(str)