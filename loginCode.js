function checkCreds() { //Begin function definition of checkCreds()
    console.log("checkCreds() started"); //Console output to show that the function has started
    var firstName = document.getElementById("fName").value; //Link from form, assign variable for First Name (string)
    var lastName = document.getElementById("lName").value; //Link from form, assign variable for Last Name (sting)
    var fullName = firstName + " " + lastName; //Concatenation of First and Last Name to create fullName variable (string)
    var badgeNumb = document.getElementById("badgeID").value; //Link from form, and assign variable for badge number (number)

    //validate fullName less than 20 characters & more than 0
    if (fullName.length > 20 || fullName.length < 2) { //If conditional check for over 20 and less than 2 as a space is always included via concatenation
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name, please resubmit";//Initial if statement failure message linked to page output
    } else if (badgeNumb > 999 || badgeNumb < 1) { //Else if conditional check on badge number between 1 & 999, aka 3 valid digits only
        document.getElementById("loginStatus").innerHTML = "Invalid Baddge Number, please resubmit";//Secondary if statement failure message on number linked to page output
    } else {
        console.log("Submission passes!"); //All conditions passed fall though of if else nest, continue
        alert("Access Granted! Welcome, " + fullName); //Alert message telling user that conditions are met, add personal name from variable
        location.replace("UATspace.html"); //Change website location to referred previous page, in otherwords, logged in.
    } //End of if else nest group


}//End of function checkCreds() function definition.
