# AutoSearch For Rewards

A Chrome browser extension that automatically performs 100 searches on Microsoft Bing Rewards to earn daily points.

## How it Works

1. Click the **"Start Search"** button in the extension popup
2. The extension opens the Bing Rewards search page
3. It automatically performs 100 searches using the search box
4. When all 100 searches are complete, the tab closes automatically

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked** and select the extension folder
5. The extension will appear in your toolbar

## Files

| File | Purpose |
|------|---------|
| `background.js` | Service worker that manages the search cycle |
| `content.js` | Runs on Bing pages, fills and submits search forms |
| `manifest.json` | Extension configuration and permissions |
| `popup.html` | Popup UI shown when clicking the extension icon |
| `popup.js` | Handles popup button interactions |

## Permissions

- `activeTab` — Access the current tab when you click the extension
- `tabs` — Create and manage the search tab
- `https://*.bing.com/*` — Required for the content script to run on Bing

## Notes

- Only works on the specific Bing Rewards search link
- Does not auto-search on any other Bing pages or Microsoft Rewards links
- No enable/disable toggle — just click "Start Search" when you want to run it
