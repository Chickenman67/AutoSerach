const actionBtn = document.getElementById('actionBtn');

actionBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startSearches' });
});
