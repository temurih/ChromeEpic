window.onload = () => {
    console.log("Hello Github");
    var html = document.getElementsByTagName("html");
    html[0].classList.add("hafiz");
};

chrome.runtime.onMessage.addListener(msg => {
    const isFileMatches = (title) => {
        return (
            msg.cs && title.endsWith(".cs") ||
            msg.js && title.endsWith(".js") ||
            msg.jsmap && title.endsWith(".js.map") ||
            msg.dts && title.endsWith(".d.ts")
        );
    };

    var arr = document.querySelectorAll('.file');
    for (const elem of arr) {
        var item = elem.querySelector(".link-gray-dark");
        if (isFileMatches(item.title)) {
            elem.classList.remove("Details--on");
            elem.classList.remove("open");
        }
    }
});
