---
slug: wsl
title: WSL
---

- [Install](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
  - `wsl` command works for me in gitbash, but not powershell. I don't know why.
- [Docker With WSL2](https://docs.docker.com/docker-for-windows/wsl/)
- [Set default distro](https://winaero.com/set-default-wsl-linux-distro-windows-10/)
- [Windows Setup Notes](https://gist.github.com/Shelob9/0620208624d5d6fc62132f4b967df9c7)
  
## Setup Ubuntu

### Node

- [Install Node With NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) - option 3.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install lts/erbium
npm install --global yarn
```

### PHP

```sh
sudo apt install php-cli
sudo apt install php7.4-json php7.4-mbstring php7.4-curl php7.4-zip

```

#### Composer

[Download and Install](https://getcomposer.org/doc/00-intro.md#downloading-the-composer-executable)

```sh
mv composer.phar /usr/local/bin/composer
//https://askubuntu.com/a/1156100
sudo chown -R $USER $HOME/.composer
```

### Git In WSL

- https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git
- https://peteoshea.co.uk/setup-git-in-wsl/

```sh
git config --global user.name "Josh Pollock"
git config --global user.email "josh.pollock@10up.com"
git config --global core.autocrlf false
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"
cd ~/.ssh
cp /mnt/c/Users/jpoll/.ssh/id_rsa* .

```
