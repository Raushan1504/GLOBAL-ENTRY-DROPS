console.log("background service worker loaded");

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    console.log("background received message:", data, sender);

    switch (data.event) {
        case 'onStop':
            console.log("On stop in background");
            sendResponse({ status: 'stopped' });
            break;

        case 'onStart':
            console.log("On start in background");
            sendResponse({ status: 'started' });
            break;

        default:
            console.log("background received unknown event:", data.event);
            sendResponse({ status: 'unknown' });
            break;
    }

    return true;
});