// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
    tabContents = document.getElementsByClassName("tab-contents");

// On openTab function call
function openTab(tabname) {
    for (let item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (let item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
