var didPuzzle = false;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, tab_info => {
    })
})

// inject foreground.js on page refresh
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (change.url && didPuzzle == false) {
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
    }
})

