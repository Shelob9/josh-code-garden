---
title: Upload Files To Github Release With Actions
slug: gh-actions-upload-files-to-releases
---

At Saturday Drive, we recently migrated from Gitlab to Github. While we were setting up the Github actions for CI, we decidied to improve our process for generating ZIP files of our [[wordpress]] plugins. The goal was to make this process constent. We also wanted to make it easier for non-engineers to test works in progress. So part of the goal was to make it so anyone with permissions could create a release of a plugin from Github's UI, wait a few minutes and then be able to download an optimized ZIP file of any branch. The process to make this ZIP will be the same for beta testing, and buildign final release files for WordPress.org or our eCommerce sites. These optimzied zips only have the files needed to run the plugins, with development dependencies, configuration files and unminifinied JavaScript and tests removed. This is a process we have documented, that can be run at the command line if all neccasary software is installed.

## Useful Documentation Links

- ttps://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables

## Options

- https://github.com/marketplace/actions/upload-assets-to-a-release
- https://github.com/marketplace/actions/github-release-create-update-and-upload-assets
- https://github.com/marketplace/actions/upload-files-to-a-github-release Check mark emoji

## Respect For Grunt First

I was very tempted to use my favorite JavaScript task runner: Grunt. Why? It works. The WordPress plugin I'm testing with was generated with WP-CLI, and that incluses a grunt file.

When I was at Pods and starting CalderaWP we created a Grunt build script that's still being used all over Caldera stuff via copypasta and it works.

Anyway, respect for an old friend. Back to convincining the cloud to do what we want for us.

## Attempt One

[My first attempt](https://github.com/Shelob9/actions-test/blob/46f011fcba61e6064beaeb407ef9e04bb3c663de/.github/workflows/zip.yml) was a pretty good learning experience. It didn't work. I forked [10up's scn deploy action](https://github.com/10up/action-wordpress-plugin-deploy) and tried to only use it to build the ZIP and do the upload.

The deploy action uses a .distignore file. I liked the idea of a root-level file that says what NOT to include in the ZIP file. This format uses same syntax as .gitignore. It is also compatible with the WP CLI create archive command. Not sure why I never used that.

## Attempt Two

Plan for two orgininally was to use these two actions:

- [For ZIPing](https://github.com/marketplace/actions/create-zip-file)
- [For upload](https://github.com/marketplace/actions/upload-files-to-a-github-release)

[Then I found the simplest option for zipping files and adding them as artifacts](https://github.com/marketplace/actions/easy-zip-files), but did not support using a distignore file. But, if the plugin has a build script that generates a directory to be ZIPed -- for example Caldera Forms or the Saturday Drive monorepo, this was most of what we needed.

That ZIP action adds an artifact to the workflow run, not the release. So we used the [upload action](https://github.com/marketplace/actions/upload-files-to-a-github-release) to upload files to each relase.

Here is the pull request: https://github.com/CalderaWP/Caldera-Forms/pull/3591
