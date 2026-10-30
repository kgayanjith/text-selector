chrome.action.onClicked.addListener(async (tab) => {
  const { on } = await chrome.storage.local.get("on");
  await chrome.storage.local.set({ on: !on });
  chrome.action.setBadgeText({ text: on ? "" : "ON" });
  chrome.tabs.reload(tab.id);
});

chrome.runtime.onStartup.addListener(async () => {
  const { on } = await chrome.storage.local.get("on");
  chrome.action.setBadgeText({ text: on ? "ON" : "" });
});