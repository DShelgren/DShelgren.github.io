//start button function definition
function start() {
    console.log("start button pushed"); //output to console when function begins
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data..."; //route data to table within html code
    index = 0; //set index to 0 to start from the beginning of data source
    timer = setInterval(updateDisplay, time_interval); //configure timer based upon update of display and time_interval value
    document.getElementById("startButton").disabled = true; //using getelement to disable start button
    document.getElementById("stopButton").disabled = false; //using getelement to enable stop button
}


//stop button function definition
function stop() {
    clearInterval(timer); //clear, end, interval timer named "timer"
    console.log("stop button pushed"); //output to console when function begins
    document.getElementById("stopButton").disabled = true; //using getelement to disable stop button
    document.getElementById("startButton").disabled = false; //using getelement to enable start button
}

function dataRow(legend, value, units){ //function definition for function dataRow with input parameters legend, value, units
    msg = "<td>"; //begin assembly of return msg table data begin
    msg += legend; //add to msg data type legend
    msg += ": </td><td>"; //adding colon space and close first table data, start new table data
    msg += value; //add to message data type value
    msg += " " + units; //add space and data type units
    msg += "</td>"; //close table data for second column
    return msg; //return completed message through function call
}

function getData(){ //function definition for getData to retrieve data
    var loadedData = loadData(); //define variable as return information from loadData() function
    return loadedData; //return from function passing loadedData variable
}

function playStation() { //define function playStation
    console.log("playstation() started"); //send to console that function has started
    mySound = new sound("gir_doom_song.mp3"); //referencing the new copy of function to file gir_doom_song.mp3
    mySound.play(); //call play function within class of myplay which calls sound
}

function playOther() { //define function playOther
    console.log("playOther() started"); // send to console that function has started
    mySound = new sound("Silly Fun.mp3"); //referencing the function to the file Silly Fun.mp3
    mySound.play(); //call play function now that all details are set.
}

function sound(src) {    //define sound function with input parameter of src
    this.sound = document.createElement("audio");    //Self reference class to document create audio
    this.sound.src = src; // attaching input parameter src to class src element
    this.sound.setAttribute("preload", "audio"); //making sure audio is available early
    this.sound.setAttribute("controls", "none"); //setting up no controlls play only4
    this.sound.style.display = "none"; //setting up display to show nothing
    document.body.appendChild(this.sound); //attach document to class

    this.play = function () { //referencing sound function as element .play
        this.sound.play(); //calling sound.play function

        this.stop = function () { //referencing sound function as element .stop
            this.sound.pause(); //calling sound.pause function
        }
    }
}



        //Start function definition of startCountdown()
        function startCountdown() {
            console.log("should start for loop")
            for (let i = 0; i < 11; i++) { //must use block scope when for & settimeout occur
                setTimeout(function () { //begin timing loop based on local i copy
                    var count = 10 - i; //define count as inverse of i
                    if (count == 0) { //if else statement for blastoff condition
                        document.getElementById("countdownTimer").innerHTML = "Blastoff !!"; //when true send Blastoff message
                    } else if (count <= 5) { //Nested else if when countdown is 5 to 1
                        document.getElementById("countdownTimer").innerHTML = "Warning less than 1/2 way to launch, time left = " + count; //when true output message, space and time remaining
                    } else document.getElementById("countdownTimer").innerHTML = count; //output of countdown default condition for all other cases within if statement

                }, i * 1000); // set timeout as i times seconds


            } //end of for loop
        } //end of startCountdown function definition

        //function to play craps

    function playCraps() {
            console.log("playCraps has started"); // Log to console the start of code
            var die1; //define variable as die1 for game
            die1 = Math.ceil(Math.random() * 6); //define die1 as the ceiling value of the random of 0-6

            console.log("The value of Die1 is: " + die1);//display to console value of die1
            console.log("The value of Die2 is: " + die2);//display to console value of die2

            document.getElementById("die1Results").innerHTML = "The value of die1: " + die1; //send to website the value of die1
            var die2; //initiliaze variable for die2
            die2 = Math.ceil(Math.random() * 6);//define die2 as the ceiling value of the random of 0-6
            document.getElementById("die2Results").innerHTML = "The value of die2: " + die2; //send to website the value of die2
            var dieSum = die1 + die2; //compute the value of die1 and die2, assign to variable dieSum

            document.getElementById("sumResults").innerHTML = "The sume of Die1&2 is  " + dieSum; //sen to the website the value of the sum of die1 & die2

            if (dieSum == 7 || dieSum == 11) { //Determine the failure case, i.e. 7 or 11, cause if else conditions
                document.getElementById("crapsResults").innerHTML = "Craps, you loose"; //Failed case detected, output Craps you loose 
            }
            else if (die1 == die2 && die2 % 2 == 0) { //If case for winning, verify both values are the same and divisible by two
                document.getElementById("crapsResults").innerHTML = "Hurray Doubles you win"; //output to website the winning result
            }
            else { //Lost case in If statement, not winning or loosing, send to website please try again.
                document.getElementById("crapsResults").innerHTML = "Please try again"

            }

        }


    

class InputData { //class definition for InputData to hold data from dataLoader-1.js
    constructor(    //begin constructor of class elements
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    )
    {
        this.time_seconds = time_seconds; //substantiation of elements
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV; //UV is seen as a possible class due to capitalization, VScode has colored it as a result
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;




    } //end of substantiation block
}//end of Class definition block

function indexTrans(){
    location.replace("index.html");
}

function objTrans(){
    location.replace("objectives.html");
}
