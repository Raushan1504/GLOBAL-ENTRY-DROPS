import fetchLocationFecther from "./API/fetchLocationFecther.js";


chrome.runtime.onInstalled.addListener(() => {
    fetchLocationFecther()


})


chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    const { event, prefs } = data;
    switch (event) {
        case 'onStop':
            handleOnStop()
            break;
        case 'onStart':
            handleOnStart(prefs)
            break;
        default:
            break;
    }
    return true;
})

const handleOnStop = () => {
    console.log("On stop in the background is called")
}

const handleOnStart = (prefs) => {
    console.log("On start in the background is called ", prefs)
    chrome.storage.local.set({ prefs })

}

