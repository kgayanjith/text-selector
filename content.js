chrome.storage.local.get("on", ({ on }) => {
  if (!on) return;

  function force(el) {
    el.style.setProperty("user-select", "text", "important");
    el.style.setProperty("-webkit-user-select", "text", "important");
  }

  function applyAll(root) {
    root.querySelectorAll("*").forEach(force);
  }

  applyAll(document);

  new MutationObserver((list) => {
    list.forEach((m) => {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) {
          force(n);
          applyAll(n);
        }
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });

  setInterval(() => applyAll(document), 2000);

  ["selectstart", "mousedown", "dragstart", "copy", "contextmenu"].forEach((name) => {
    window.addEventListener(name, (e) => e.stopImmediatePropagation(), true);
  });
});