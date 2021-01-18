--- 
title: Laravel + React + Typescript
slug: taulwind-react-typescript
---

Notes on a "TRTL" stack.

- [[Tailwind]]
- [[React]]
- [[Typescript]]]
- [[laravel]]

## Add TypeScript and React With Laravel Mix

- Install Typescipt + Mix extension
  - `npm install laravel-mix-react-typescript-extension`
- Install React
  - `npm install react react-dom @types/react @types/react-dom`
- Update Mix
  - (See README](https://www.npmjs.com/package/laravel-mix-react-typescript-extension#usage)
- Create files
  - /resources/js/app.tsx
  - /ressources/css/app.scss
- Install Tailwind for Mix
  - `npm install mix-tailwindcss --save-dev`
  - `npx tailwindcss init -p`

```js
//webpack.mix.js
const mix = require("laravel-mix");
require("mix-tailwindcss");

//https://www.npmjs.com/package/laravel-mix-react-typescript-extension#usage
require("laravel-mix-react-typescript-extension");
mix.reactTypeScript("resources/js/app.tsx", "public/js");

//https://laravel-mix.com/extensions/tailwindcss
require("mix-tailwindcss");
mix.postCss("resources/css/app.css", "public/css").tailwind();
```