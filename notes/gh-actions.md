---
title: Github Actions
slug: gh-actions
---

- [Github Actions Documentation](https://docs.github.com/en/actions/)
- [Secret Environment Variables](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
  - [Set in process.env in Node testing](https://docs.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions#example-using-a-private-registry-and-creating-the-npmrc-file)

## Other Bubbles

- Github Actions For Laravel
  - [[gh-actions-laravel]]
- Github Actions For WordPress
  - [[gh-actions-upload-files-to-releases]]
  - [[gh-actions-wordpress-tests]]
- Github actions for Vercel
  - [[gh-actions-vercel]]

## Caching

- [php](https://github.com/actions/cache/blob/main/examples.md#php---composer)

### NPM Cache In Github Actions

```yml
- name: Prepare npm cache
  uses: actions/cache@v2
  with:
    path: ${{ env.NODE_CACHE }}
    key: npm-${{ env.NODE_VERSION }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      npm-${{ env.NODE_VERSION }}-
```

### Composer Cache In Github Actions

```
- name: Prepare composer cache
  uses: actions/cache@v2
  with:
    path: ${{ env.COMPOSER_CACHE }}
    key: composer-${{ env.COMPOSER_VERSION }}-${{ hashFiles('**/composer.lock') }}
    restore-keys: |
      composer-${{ env.COMPOSER_VERSION }}-
```

## Intresting Actions

- [Run Scripts](https://github.com/actions/github-script)
  - Use to run small Scripts
  - Has a way to use [octokit]() as JavaScript in the actions which looks super useful.
- [Setup PHP](https://github.com/shivammathur/setup-php)
- [Publish to NPM](https://github.com/marketplace/actions/npm-publish)
- [Laravel Vapor Deployment](https://github.com/marketplace/actions/laravel-vapor)
  - [Set Laravel environment variables using Github secrets](https://stackoverflow.com/questions/61857523/how-to-use-github-secrets-on-env-file)

