// ELEMENTS
const locationIdElement = document.getElementById("locationId");
const startDateElement = document.getElementById("startDate");
const endDateElement = document.getElementById("endDate");

// Button elements
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("endButton");

const getPrefs = () => ({
    locationId: locationIdElement.value,
    startDate: startDateElement.value,
    endDate: endDateElement.value
});

startButton.onclick = () => {
    chrome.runtime.sendMessage({ event: "onStart", prefs: getPrefs() });
};

stopButton.onclick = () => {
    chrome.runtime.sendMessage({ event: "onStop", prefs: getPrefs() });
};

chrome.storage.local.get(["locationId","startDate","endDate"], (result) => {
    const { locationId, startDate, endDate } = result;

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