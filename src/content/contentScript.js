
chrome.runtime.onMessage.addListener(msg => {
    if (!msg.target) {
        return;
    }

    for (const elem of document.querySelectorAll("a")) {
        if (elem.target === "_blank" || !elem.hasChildNodes()) {
            elem.remove();
        }
    }
});