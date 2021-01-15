---
title: Github Actions For Laravel
slug: gh-actions-laravel
---

- [[gh-actions]]
- [[Laravel]]

## Running Laravel Tests With Github Actions

```yml
name: Tests

on: push

jobs:
  laravel-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Copy .env
        run: php -r "file_exists('.env') || copy('.env.example', '.env');"
      - name: Install Dependencies
        run: composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist
      - name: Generate key
        run: php artisan key:generate
      - name: Directory Permissions
        run: chmod -R 777 storage bootstrap/cache
      - name: Create Database
        run: |
          mkdir -p database
          touch database/database.sqlite
      - name: Migrate Database
        env:
          DB_CONNECTION: sqlite
          DB_DATABASE: database/database.sqlite
        run: php artisan migrate
      - name: Execute tests (Unit and Feature tests) via PHPUnit
        env:
          DB_CONNECTION: sqlite
          DB_DATABASE: database/database.sqlite
          ## Must be set as a secret in github repo
          SOME_SECRET: ${{ secrets.SOME_SECRET }}
        run: vendor/bin/phpunit
```

## Deploy Laravel Vapor Application Using Github Actions

Github actions can be used to automate deployments when using Vapor. I am using two jobs, one for production and one for a "develop" environment.

This is the job that I use to deploy the "develop" branch on Github to the "develp" Vapor environment on AWS, whenever I push to that branch:

```yml
# On push to develop branch, deploy to staging

name: Staging Deployment

on:
  push:
    branches: [develop]

jobs:
  vapor:
    name: Check out and deploy using Vapor
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Login to Github Package Registry
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login docker.pkg.github.com -u ${{ github.actor }} --password-stdin
      - name: Deploy to Staging
        run: |
          docker run \
            --env VAPOR_API_TOKEN=${{ secrets.VAPOR_API_TOKEN }} \
            --volume $(pwd):/app \
            docker.pkg.github.com/ubient/laravel-vapor-action/laravel-vapor-action:latest \
            deploy develop
```

This job is used to deploy to production, whenever I push to master:

```yml
# On push to master, deploy to production

name: Deployment

on:
  push:
    branches: [master]

jobs:
  vapor:
    name: Check out and deploy using Vapor
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Login to Github Package Registry
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login docker.pkg.github.com -u ${{ github.actor }} --password-stdin
      - name: Deploy to Production
        run: |
          docker run \
            --env VAPOR_API_TOKEN=${{ secrets.VAPOR_API_TOKEN }} \
            --volume $(pwd):/app \
            docker.pkg.github.com/ubient/laravel-vapor-action/laravel-vapor-action:latest \
            deploy production
```