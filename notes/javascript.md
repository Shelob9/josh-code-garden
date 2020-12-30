---
title: JavaScript
slug: javascript
---

- [[react]]

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
