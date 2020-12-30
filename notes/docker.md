---
title: Docker
slug: docker
---

## Stop And remove all Docker containers

[based on](https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers)

```sh
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
```

## WordPress Docker

[[wordpress]]

- https://github.com/docker/awesome-compose/blob/master/wordpress-mysql/docker-compose.yaml
- https://github.com/eugeneware/docker-wordpress-nginx
- https://github.com/jaredpalmer/presspack
- https://github.com/phpearth/docker-php
- https://github.com/DanielDent/docker-nginx-ssl-proxy
- https://github.com/HardeepAsrani/pirate-brewery
  - Example:
    - https://github.com/Codeinwp/neve/blob/master/.github/workflows/test-php.yml
    - https://github.com/Codeinwp/neve/blob/master/docker-compose.ci.yml
  - Example
    - https://github.com/Codeinwp/otter-blocks/blob/master/.github/workflows/test-php.yml
    - https://github.com/Codeinwp/otter-blocks/blob/master/docker-compose.yml
