// background.js
chrome.contextMenus.create({
  id: 'copyImage',
  title: 'Copy Image to Clipboard',
  contexts: ['image']
});