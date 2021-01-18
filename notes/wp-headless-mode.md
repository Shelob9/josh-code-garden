---
title: WordPress Headless Mode
slug: wp-headless-mode
---

Notes related to ideas I've had for building tools/ products for headless WordPress sites.

Serves WordPress sites that are being used for content authoring and serving content via REST API and/ or WPGraphQL to decoupled front-end or use with a [[static-stite-generator]].

[[wordpress]]

This is a developer tool, that could be used to build no code tools for a non-technical users.

## Components

### Free WordPress Plugin

> Status: Released, and near feature complete.

Blocks all requests to site besides wp-admin, wp-json and wp-graphql.

- [Github Plugin](https://github.com/Shelob9/headless-mode)
- [Headless Mode](https://wordpress.org/plugins/headless-mode)

Important missing feature: Per page/ endpoint pattern block to allow some pages to be served via traditional WordPress, use [[next]] or [[gatsby]] or whatever for most pages. This will allow for gradual adoption of headless WordPress instead of all in.

Who it serves:

- Developers building simple sites with a headless CMS.

### Headless Mode Worker

> Status: Proofs of concepts built.

As an add-on to the Headless Mode plugin, use Cloudflare workers to:

- Block requests to WordPress site not allowed by plugin, at network level, unless logged in.
  - Should work with exclusions feature in headless mode plugin.
- Serve wp-json as static API.
  - I wrote an [article](https://torquemag.io/2019/02/using-express-to-build-a-node-js-server-to-proxy-the-wordpress-rest-api/) and proof of concept of the server -- using [[express]]
- Pregenerate cache on post save, etc.
  - WordPress plugin feature.
  - I wrote and [article](https://torquemag.io/2019/01/using-the-wp-queue-to-copy-rest-api-data-to-files/) and proof of concept for this.
- oAuth2 auth based on WordPress users.
  - Integrate with [next-auth](https://next-auth.js.org/).
- IAM permission managment for full CRUD API.
- Git-baked, forkable WordPress sites.
  - When editting, create basic MySQL DB, but proxy REST API in WordPress to [[markdown-api]]. All content is written to Git repo.
  - Create UI for forking posts, revision visualization, suggesting edits, and listing contributors.
  - [Gatsby Gutenberg](https://gatsbywpgutenberg.netlify.app/)

### No Code Static Site Builder

## Businessing Notes

### Who Uses This

- Plugin
  - Developers
    - Building websites.
- Worker
  - Developers
  - Enterprise
  - Part of a product.
- Site Builder
  - SMB
  - Startups
  - Enterprise
