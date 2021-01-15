---
title: phpunit
slug: phpunit
---
For testing [[php]]

## Do Not Ship phpunit

> [Composer Docs](https://getcomposer.org/doc/03-cli.md#update-u)

The command `composer install`, includes the development dependencies, including phpunit, which is not safe.

Better option: - `composer update --no-dev -o` - `--no--dev` skips require-dev - `-o` optimizes the autoloader.

