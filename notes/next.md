---
title: Next.js
slug: next
---
 
A [[react]] static site generator

## Adding Testing With Jest

> See [[gh-actions-vercel]]

- [Setup Jest](https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d)
- [If using CSS Modules, mock CSS modules](https://jestjs.io/docs/en/webpack#mocking-css-modules)
- If using fetch add polyfill to setupTests.js
  - `import "cross-fetch/polyfill";`
- Add Github Action:

```yml
name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install
        run: yarn
      - name: Run tests
        run: yarn test --ci
```

## Window undefined

https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

```jsx
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
	() => import("../components/hello3"),
	{ ssr: false } //Important Part
);

function Home() {
	return (
		<div>
			<Header />
			<DynamicComponentWithNoSSR />
			<p>HOME PAGE is here!</p>
		</div>
	);
}

export default Home;
```

## Next.js With MDX and TypeScript

- https://sergiodxa.com/articles/next-tailwind
- https://codeconqueror.com/blog/building-a-blog-with-next-js
- `yarn create next-app --example with-mdx with-mdx-app`
- Modify pageExtensions in withMdx config to include 'ts' and 'tsx'. Do this in next.config.js
  - Without this, adding `/pages/about.js` would work, but no `/pages/about.tsx`

```js
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx", "tsx", "ts"],
});
```

## Ad TypeScript To nextjs

- [Building Tailwind's Blog with Tailwind and NextJS](https://blog.tailwindcss.com/building-the-tailwind-blog)
- [Tailwing + NextJS Tutorial](https://dev.to/notrab/get-up-and-running-with-tailwind-css-and-next-js-3a73)
- [NextJS + Tailwind Example](https://github.com/tailwindlabs/tailwindcss-setup-examples/blob/master/examples/nextjs)

1. `yarn add tailwindcss postcss-import autoprefixer @fullhuman/postcss-purgecss`
2. `yarn tailwind init`
3. Create postcss.config.js

```js
module.exports = {
	plugins: ["tailwindcss", "autoprefixer"],
};
```

3. tailwind.config.js

```js
module.exports = {
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: {
		mode: "all",
		content: [
			"pages/**/*.js",
			"pages/**/*.tsx",
			"components/**/*.js",
			"components/**/*.tsx",
		],
		options: {
			keyframes: true,
		},
	},
};
```

