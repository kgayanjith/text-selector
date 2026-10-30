chrome.storage.local.get(["selectedText", "pageUrl"], (data) => {
  document.getElementById("output").textContent = data.selectedText || "No text selected yet";
  document.getElementById("source").textContent = data.pageUrl || "";
});

document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("output").textContent);
});