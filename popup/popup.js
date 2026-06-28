const locationIdElement = document.getElementById("locationId");
const startDateElement = document.getElementById("startDate");
const endDateElement = document.getElementById("endDate");

const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("endButton");


startButton.onclick = ()=> {
    if(startDateElement.value){
       console.log(" Valid start Date :", startDateElement.value)
    }else{
        console.log("Start Date invalid");
    }
}

stopButton.onclick = ()=> {
    console.log("You clicked the stop Button")

}