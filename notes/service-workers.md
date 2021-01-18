--- 
title: Service Workers
slug: service-workers
---

- [web.dev](https://developers.google.com/web/fundamentals/primers/service-workers)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

## Register Service Workers

```js
if {
	undefined !== window &&
		window.navigator.serviceWorker
			.register("./sw.js", { scope: "." })
			.then((reg) => {
				// registration worked
				console.log("Registration succeeded. Scope is " + reg.scope);
			})
			.catch((error) => {
				// registration failed
				console.log("Registration failed with " + error);
			});
}
```

## Log requests with service worker

```js
self.addEventListener("install", function (event) {
	console.log("Sevice worker installed");
});

self.addEventListener("fetch", (event) => {
	console.log(event.request.method, event.request.url);
	event.respondWith(fetch(event.request));
});
```

## Proxy Specific Requests With Service Workers

```js
self.addEventListener("fetch", (event) => {
const { url, method } = event.request;
//Does the URL match? But only for get
if (url.includes("/api/whatever") && 'GET' === method ) {
event.respondWith(
new Response(
//JSON encoded object
//Could be string,blob,redirect,etc
JSON.stringify({
hi: 'Roy'
}),
{
//Set additional headers
headers: {
//Send JSON content type headers
"Content-Type": "text/json"
},
}
)
);
} else {
//No match? Send to network
event.respondWith(fetch(event.request));
}
});
```
