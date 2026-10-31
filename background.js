async function showBadge() {
  const { off } = await chrome.storage.local.get("off");
  chrome.action.setBadgeText({ text: off ? "OFF" : "ON" });
}

chrome.action.onClicked.addListener(async (tab) => {
  const { off } = await chrome.storage.local.get("off");
  await chrome.storage.local.set({ off: !off });
  await showBadge();
  chrome.tabs.reload(tab.id);
});

chrome.runtime.onInstalled.addListener(showBadge);
chrome.runtime.onStartup.addListener(showBadge);