---
title: Gatsby
slug: gatsby
---

> [Gatbsy](https://gatsby.org)

A [[react]] static stite generator.

## Using Express To Serve Gatsby And An API

```js
const express = require("express");
const path = require("path");
const app = express();

// Transmit greetings to Roy
app.get("/hi", (req, res) => {
	res.status = 200;
	res.json({ hello: "Roy" });
});
// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, "client/public/")));
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

//Start on 5000.
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
```
