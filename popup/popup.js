const locationIdElement = document.getElementById("locationId");
const startDateElement = document.getElementById("startDate");
const endDateElement = document.getElementById("endDate");

const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("endButton");


// Example of sending state to the background script
startButton.onclick = () => {
    const prefs = {
        locationId: locationIdElement.value,
        startDate: startDateElement.value,
        endDate: endDateElement.value,
    }
    console.log(prefs)
    if (startDateElement.value) {
        chrome.runtime.sendMessage({ event: 'onStart', prefs: prefs });
    } else {
        console.log("Start Date invalid");
    }
}

stopButton.onclick = () => {
    chrome.runtime.sendMessage({ event: 'onStop' });
}

chrome.storage.local.get("prefs", (result) => {
    const { locationId, startDate, endDate } = result.prefs || {};

    if (locationId) {
        locationIdElement.value = locationId;
    }
    if (startDate) {
        startDateElement.value = startDate;
    }
    if (endDate) {
        endDateElement.value = endDate;
    }
});