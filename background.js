let initialTitles = {}; // Store initial titles keyed by tab ID

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && !initialTitles[tabId]) {
    // Capture the initial title when the page finishes loading
    initialTitles[tabId] = tab.title;
  } else if (changeInfo.title && initialTitles[tabId] && changeInfo.title !== initialTitles[tabId]) {
    // Restore the initial title if it changes
    chrome.tabs.update(tabId, { title: initialTitles[tabId] });
  }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  // Clean up the stored initial title when the tab is closed
  delete initialTitles[tabId];
});