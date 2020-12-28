---
title: Github Pages
slug: gh-pages
---

## 404 For Assets In Directories Starting With An Underscore

Github pages defaults to using Jekyll so it does not serve assets in directories starting with an underscore. That's a problem with [[next]] apps, which use a `_next` directory.

The soultion is to disable Jekyll by adding a `.nojekyll` file. This file has to go in the root of the directory that is served by Github pagess. So, if you are using the `docs` directory of the `gh-pages` branch, then create `docs/.nojekyll` in the `gh-pages` branch. It does not matter what you put in it.

- [NextJS Issue Github Pages and `_next`](https://github.com/vercel/next.js/issues/9460#issuecomment-626085056) sub directory.
- [Blog post about this feature.](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
