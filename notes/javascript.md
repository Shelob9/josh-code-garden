---
title: JavaScript 
slug: javascript
---
 - [[react]]
- [[gatsby]]
- [[chai]]

## Create Object From Two Arrays

> [Stack Overflow Answer](https://stackoverflow.com/a/39128144)

```js
function(uniqueSet, dataSet) {
	const obj = new Set();
	let used = new Set();
	uniqueSet.forEach((value, index) => {
		if (!used.has(value)) {
			obj.add(dataSet[index]);
			used.add(value);
		}
	});
	return Array.from(obj);
}
```

## Find Item In Array Of Objects

```
function findById(id,items){
    return items.find(u => u.id === id)
};

function isInArray(id,items){
    return -1 !== items.findIndex(u => u.id === id );
}
```

## Paste Events

```
const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});

```