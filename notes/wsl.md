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

If using Debian, [install curl](https://www.cyberciti.biz/faq/howto-install-curl-command-on-debian-linux-using-apt-get/?__cf_chl_captcha_tk__=pmd_D_G0leeI9u751e9GZ34jC959kJTKWNYGSuWeIsLEESk-1629324863-0-gqNtZGzNAzujcnBszQj9)

```sh
sudo apt update && sudo apt upgrade
sudo apt install curl
 sudo apt-get install wget
```
### Node

- [Install Node With NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) - option 3.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install lts/erbium
npm install --global yarn
```

### PHP 7.4

```sh
sudo apt install php-cli
sudo apt install php7.4-json php7.4-mbstring php7.4-curl php7.4-zip php-simplexml

```

### PHP8
- [How to install PHP8 on debian](https://computingforgeeks.com/how-to-install-php-on-debian-linux/)

```sh
sudo apt update
sudo apt -y upgrade
sudo reboot
sudo apt install -y lsb-release ca-certificates apt-transport-https software-properties-common
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
wget -qO - https://packages.sury.org/php/apt.gpg | sudo apt-key add -
sudo apt update
sudo apt install php8.0 -y
sudo apt install php8.0-{mysql,cli,common,imap,ldap,xml,fpm,curl,mbstring,zip}
php -v

```

#### Composer

```sh
mv composer.phar /usr/local/bin/composer
//https://askubuntu.com/a/1156100
sudo chown -R $USER $HOME/.composer
```

Or:

```sh
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
wget -O composer-setup.php https://getcomposer.org/installer
composer -v
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
