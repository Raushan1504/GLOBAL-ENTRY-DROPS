const locationIdElement  = document.getElementById("locationID")

const startDateElement = document.getElementById("startDate")
const EndDateElement = document.getElementById("endDate")

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("endButton");

const sendCommand = message => {
    chrome.runtime.sendMessage(message, response => {
        if (chrome.runtime.lastError) {
            console.error("sendMessage failed:", chrome.runtime.lastError.message);
        } else {
            console.log("popup sendMessage response:", response);
        }
    });
};

startButton.onclick = function() {
    sendCommand({ event: "onStart" });
};

stopButton.onclick = function() {
    sendCommand({ event: "onStop" });
};
