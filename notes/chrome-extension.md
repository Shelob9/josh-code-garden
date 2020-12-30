---
title: Chrome Extension Development
slug: chrome-extension
---

## Chrome Extension That Adds A Right Click Menu Item

```json
{
	"name": "Select Text",
	"description": "Logs selected text, url and page title",
	"version": "0.6",
	"permissions": ["contextMenus"],
	"background": {
		"scripts": ["index.js"]
	},
	"manifest_version": 2
}
```

```js
function genericOnClick(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");

	const selectionText = info.hasOwnProperty("selectionText")
		? info.selectionText
		: "";

	const { title, url } = tab;
	console.log(selectionText, title, url);
}

// Create one test item for each context type.
var contexts = [
	"page",
	"selection",
	"link",
	"editable",
	"image",
	"video",
	"audio",
];
for (var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	var title = "Test '" + context + "' menu item";
	var id = chrome.contextMenus.create({
		title: title,
		contexts: [context],
		onclick: genericOnClick,
	});
}
```
