
var button = document.getElementById("run");

button.onclick = () => {
    var val = {
        "js": document.getElementById("js").checked,
        "jsmap": document.getElementById("jsmap").checked,
        "dts": document.getElementById("dts").checked,
        "cs": document.getElementById("cs").checked,
        "target": document.getElementById("tar").checked,
    };
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, val);
    });
};