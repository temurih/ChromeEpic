console.log("Hello Waffle");

const BORDER_COLOR = "#656464";
const LIGHT_TEXT = "#fefefe";
const DARK_BLACK = "#343434";
const LIGHT_BLACK = "#525252";
const LIGHTER_BLACK = "#676666";

const sheet = (() => {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);

	return style.sheet;
})();

var html = document.getElementsByTagName("html");
html[0].classList.add("hafiz");

sheet.addRule(
    "html.ng-scope.hafiz .modal.detail-modal .modal-content .modal-body",
    `background-color: ${DARK_BLACK};
     color: ${LIGHT_TEXT};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .modal.detail-modal .modal-content .modal-body .top",
    `background-color: ${DARK_BLACK};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .modal.detail-modal .modal-content .option-button",
    `color: ${LIGHT_TEXT};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .modal.detail-modal .modal-content .modal-header",
    `background-color: ${LIGHT_BLACK};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .card-comment .card-item .card-item-body",
    `background-color: ${LIGHT_BLACK}; color: ${LIGHT_TEXT}; border: none;`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .comment-form.logged-in",
    `background-color: ${LIGHT_BLACK}; color: ${LIGHT_TEXT}; border: 1px solid ${BORDER_COLOR};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .nav-tabs>li.active>a, .nav-tabs>li.active>a:hover, .nav-tabs>li.active>a:focus",
    `color: ${LIGHT_TEXT}; background-color: ${LIGHTER_BLACK}; border: 1px solid ${BORDER_COLOR};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .comment-form .footer",
    `background-color: ${LIGHT_BLACK};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .comment-form .tab-content",
    `background-color: ${LIGHT_BLACK};`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .comment-form .tab-content textarea",
    `background-color: ${LIGHT_BLACK}; color: ${LIGHT_TEXT}`,
     0
);

sheet.addRule(
    "html.ng-scope.hafiz .nav-tabs",
    `border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;`,
     0
);

sheet.addRule(
    "::-webkit-scrollbar",
    `width: 14px; height: 14px;`,
     0
);

sheet.addRule(
    "::-webkit-scrollbar-track",
    `background-color:#525252;
     border-radius:10px;
     box-shadow:inset 0 0 6px rgba(0,0,0,0.3);`,
     0
);

sheet.addRule(
    "::-webkit-scrollbar-thumb",
    `background-clip:content-box;
     background-color:rgba(0,0,0,0.4);
     border:3px solid transparent;
     border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,0.4);`,
     0
);

sheet.addRule(
    "::-webkit-scrollbar-thumb:hover",
    `background-color:rgba(0,0,0,0.5);`,
     0
);