const SERCHAPI = "https://www.learnersdictionary.com/definition/";

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "Search On Learner's Dictionary",
        id: "search_on_merriam_webster",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId == "search_on_merriam_webster")
        chrome.tabs.create({ url: SERCHAPI + info.selectionText });
});

chrome.omnibox.onInputEntered.addListener(function (text) {
    chrome.tabs.create({ url: SERCHAPI + text });
});