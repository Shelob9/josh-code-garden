---
title: phpunit
slug: phpunit
---
For testing [[php]]

## Do Not Ship phpunit

> [Composer Docs](https://getcomposer.org/doc/03-cli.md#update-u)

The command `composer install`, includes the development dependencies, including phpunit, which is not safe.

Better option: - `composer update --no-dev -o` - `--no--dev` skips require-dev - `-o` optimizes the autoloader.

## Good tutorials on WordPress + phpunit

* https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/
* https://deliciousbrains.com/unit-testing-ajax-api-requests-wordpress-plugins/
* https://carlalexander.ca/introduction-wordpress-unit-testing/
* https://developer.yoast.com/unit-testing-wordpress-plugins-with-phpunit-in-phpstorm/
* https://www.smashingmagazine.com/2017/12/automated-testing-wordpress-plugins-phpunit/
* https://pippinsplugins.com/unit-tests-wordpress-plugins-setting-up-testing-suite/
* https://torquemag.io/2018/05/advanced-oop-for-wordpress-part-5-using-the-wordpress-test-suite-for-integration-testing/
* https://torquemag.io/2018/08/advanced-oop-for-wordpress-part-7-refactoring-is-an-opportunity-to-adopt-test-driven-development/
* https://torquemag.io/2018/08/advanced-oop-for-wordpress-part-8-developing-new-features-for-extensible-wordpress-plugins-using-test-driven-development/