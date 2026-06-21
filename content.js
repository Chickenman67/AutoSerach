// When page fully loads, tell background we're ready
window.addEventListener('load', () => {
    chrome.runtime.sendMessage({ action: 'contentReady' });
});

// Listen for search instructions from background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'performSearch') {
        const searchIndex = request.index;
        const searchBox = document.querySelector('[name="q"]');

        if (searchBox) {
            let searchQuery = '/'.repeat(searchIndex + 1);
            searchBox.value = searchQuery;
            searchBox.form.submit();
        }
    }
});
