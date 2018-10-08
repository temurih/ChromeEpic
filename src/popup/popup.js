
var button = document.getElementById("run");

button.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        var val = {
            "js": document.getElementById("js").checked,
            "jsmap": document.getElementById("jsmap").checked,
            "dts": document.getElementById("dts").checked,
            "cs": document.getElementById("cs").checked,
            "target": document.getElementById("tar").checked,
            "tab": tabs[0] // active tab
        };
        chrome.tabs.sendMessage(tabs[0].id, val);
    });
};