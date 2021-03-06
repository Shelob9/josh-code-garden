---
title: Github Actions For Vercel
slug: gh-actions-vercel
---

Recently at [Saturday Drive](https://saturdaydrive.com) we migrated from self-hosted GitLab to Github. I worked on migrating the [[wordpress]] plugins to [[wordpress]] and helped with the [[laravel]] apps, which were easier.

Caldera Forms was already on Github, but not using Github actions. We set up actions for Caldera Forms first, to learn how, with the least other steps and then applied what we learned to Ninja Forms and other repos.

In the post I'll share some of what we learned. A lot of how we figured this out was I did the first pass and then Nico made it actually work. So a lot of credit goes to him for that and figuring out the end to end testing parts, which are really cool.

## Other Examples

- https://github.com/wp-cli/scaffold-command/pull/257#issuecomment-636308643
- https://github.com/wp-cli/scaffold-command/blob/f9bad3dd7224d5684d950d31c486df70905e386f/templates/plugin-github.mustache

## Caldera Forms

In [Caldera Forms](https://calderaforms.com), [Nico](https://twitter.com/nicofigueira) [ended up using](https://github.com/CalderaWP/Caldera-Forms/pull/3575) the same docker-compose file as we use for local dev in the Github action.

While we were working on this migration, we upgraded to phpunit 7, which required a new dockerfile](https://github.com/CalderaWP/Caldera-Forms/blob/develop/bin/docker/phpunit/DOCKERFILE). If you read the inline docs on that dockerfile, you'll see it links to the files its based on. I needed to get phpunit 7 and a few more dependencies into an image, and the phpunit 7 docker iamges didn't have that tag, but the file was on Github for me to base mine on.

I extracted that dockerfile to it's [own repo](https://github.com/Shelob9/wordpress-phpunit/). I [used actions](https://github.com/Shelob9/wordpress-phpunit/actions) to publish the [image](https://github.com/Shelob9/wordpress-phpunit/packages/308041). Which is cool, I'd never used Github package registry.

Pull request: https://github.com/CalderaWP/Caldera-Forms/pull/3579

