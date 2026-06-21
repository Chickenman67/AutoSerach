const TOTAL_SEARCHES = 100;
let searchCount = 0;
let tabId = null;
let isSearching = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startSearches') {
        searchCount = 0;
        isSearching = true;
        chrome.tabs.create({ url: 'https://bing.com/?form=ML2XQD&OCID=ML2XQD&PUBL=RewardsDO&CREA=ML2XQD' }, (tab) => {
            tabId = tab.id;
        });
    }

    // Content script loaded on a page in our tracked tab
    if (request.action === 'contentReady' && isSearching && sender.tab && sender.tab.id === tabId) {
        if (searchCount >= TOTAL_SEARCHES) {
            // All done — close the tab
            isSearching = false;
            chrome.tabs.remove(tabId);
            tabId = null;
            console.log('All 100 searches completed!');
        } else {
            // Send next search and advance counter
            chrome.tabs.sendMessage(tabId, { action: 'performSearch', index: searchCount });
            searchCount++;
        }
    }
});
