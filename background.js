chrome.runtime.onMessage.addListener(data => {

    const {event,prefs} = data;
    switch (event) {
        case 'onStop':
            handleOnStop()
            break;

        case 'onStart':
             handleOnStop(prefs)
            break;

        default:
            break;
    }
});

const handleOnStop = ()=>{
    console.log("On Stop in the background")
}

const handleOnStop = (prefs)=>{
     console.log("On Start in the background")
}
chrome.storage.local.set(prefs);