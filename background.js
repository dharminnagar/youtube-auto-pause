chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tabs = await chrome.tabs.query({ windowId: activeInfo.windowId });
  
  tabs.forEach(tab => {
    if (tab.id === activeInfo.tabId) {
      // The new tab has been activated
      chrome.tabs.sendMessage(tab.id, { action: "resumeVideo" });
    } else {
      // The tab is now inactive
      chrome.tabs.sendMessage(tab.id, { action: "pauseVideo" });
    }
  });
});