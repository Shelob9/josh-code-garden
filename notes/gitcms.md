---
title: Git CMS 
slug: gitcms
---
 GitCMS is a Git-based CMS with optional React components and Next.js-integrations that dreams of being a distributed knowledge graph. It is a work in progress.

>[View Source](https://github.com/Shelob9/gitcms)

```sh
yarn add @digital-garden-builder/git-cms
```

[Digital Garden Builder](https://docs.digitalgardenbuilder.app/) was partially developed as proof of concept for Git CMS. My hope is that others will be able to create there own front-ends for this API. I intend to make it especially useful to those creating mutli-author applications with markdown and block-based content and APIs.

This note is about why I am building GitCMS and what my plans are. The [Readme](https://github.com/Shelob9/gitcms/blob/main/README.md) has notes about how it works. If you would like to help with this project, please open an [issue](https://github.com/Shelob9/gitcms/issues) or send me [DM on Twitter](https://twitter.com/josh412).

## Why Git?

Content creation is mutliplayer and takes place over an extended period of time. This has always been true, but the internet makes this more true. Git and other version controll systems are purpose built for distributed, multi-author content creation. By using Git, and Github's API and get versioned, branchable, forkable, multi-author data storage with little to no cost for data storage and website hosting.

While traditional CMSes seperate content from code by storing content in a database, many [Jamstack sites](https://jamstack.org/what-is-jamstack/) store there content in the same git repo as the code. While this creates a host of UX and DX issues, it means the content __can be__ versioned with transperancy about what has changed, when and by whom. It can also be multi-author and the storage can be distributed.

Right now, I am using the [github-api] beacuse Github makes so much of the complexity of building this trivial. Also, they provide free data storage and hosting as well as handle authentication. Long-term, I would rather this used a a trustless, p2p system for data storage and the commit hashes were logged on a blockchain of some sort.

## Content Types

GitCMS works with directories of markdown or JSON files. Markdown is parsed to HTML or other formats using [mdx](https://mdxjs.com), which is commonly used with [Gatsby](https://www.gatsbyjs.com/) and allows for processing text with [unified.js](https://unifiedjs.com/).

## Roadmap

- v0 Proof of concept built into Digital Garden Builder
- v1 npm package abstracted from Digital Garden Builder
  - Uses Github API for authentication and storage
  - Markdown and JSON files and API endpoints.
  - Graph of links between notes
  - Graph of conceptual links between notes
  - Stretch goals:
    - Edge cache
    - GraphQL server
    - WordPress plugin to import blocks and notes into posts and pages.
    - Sync notes to [dev.to](https://dev.to) and other [Forem](https://www.forem.com/) communities.
- v2 Decentralized storage and identity
  - Use a distributed identity token and/ or 3Box and/or ENS for identity.
  - Decentralized git provider or use something like [isomorphic git](https://github.com/isomorphic-git/isomorphic-git) with [ipfs](https://ipfs.io/) for storage.[]
