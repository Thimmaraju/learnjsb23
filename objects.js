   const  student = {

      firstname : "Raju",
      lastname: "G",
      Place : "Bangalore",
      age: 31,
      rollnumber : 418
        
   }

//accessing the property values from object

   console.log(student.rollnumber)

   console.log(student['Place'])


   console.log(student.course)

   student["course"] = "Cypress"  // adding

   console.log(student.course)

    student["Place"] = "Chennai"  // edit / update

    console.log(student['Place'])

    delete student.age

    console.log(student['age'])

    colors = {

        color1 : "Red",
        color2 : "Blue",
        color3 : "Black",
    }

    // {

    //    console.log("The color is : "+ )

    // }

    for(let color in colors){

        console.log("The color is : "+ colors[color] )
    }



    menuitems = {

        menu1: "Admin",
        menu2 : "PIM",
        menu3 : "Leave",
        menu4: "Time",
        raju : {

            xyz : "abc"
        }
    }

    for(let i in menuitems){

        
        console.log(i + ":"+ menuitems[i] )
    }


    console.log(menuitems.raju.xyz)