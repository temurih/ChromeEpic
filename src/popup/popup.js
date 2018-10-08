
var button = document.getElementById("run");

chrome.storage.sync.get(["chromeEpicSettings"], result => {
    document.getElementById("js").checked = result.chromeEpicSettings.js;
    document.getElementById("jsmap").checked = result.chromeEpicSettings.jsmap;
    document.getElementById("dts").checked = result.chromeEpicSettings.dts;
    document.getElementById("cs").checked = result.chromeEpicSettings.cs;
    document.getElementById("tar").checked = result.chromeEpicSettings.target;
});

button.onclick = () => {
    var val = {
        "js": document.getElementById("js").checked,
        "jsmap": document.getElementById("jsmap").checked,
        "dts": document.getElementById("dts").checked,
        "cs": document.getElementById("cs").checked,
        "target": document.getElementById("tar").checked
    };

    chrome.storage.sync.set({"chromeEpicSettings": val});

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        val.tab = tabs[0]; // active tab
        chrome.tabs.sendMessage(tabs[0].id, val);
    });
};