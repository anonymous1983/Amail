Amail [![Build Status: Linux](https://travis-ci.org/anonymous1983/Amail.svg?branch=master)](https://travis-ci.org/anonymous1983/Amail) <a href="https://ci.appveyor.com/project/anonymous1983/Amail"><img src="https://ci.appveyor.com/project/anonymous1983/Amail/branch/master" alt="Build Status: Windows" height="18" /></a>
=====

Inbox Amail is a mail management width NodeJS, AngularJS, MySQL, REST

### Required :
* Make sure a Grunt module is installed :
```sh
npm -g ls --depth=0
```
* Install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this :
```sh
npm install -g grunt-cli
```


### Build Project :
Unix/Macintosh:
Assuming that the Grunt CLI has been installed and that the project has already been configured with a `package.json` and a `Gruntfile`, it's very easy to start working with Grunt:

1. Change to the project's root directory.
2. Install project dependencies with `npm install`.
3. To build resources :

* `grunt app-init` : Install bowr dependencies
* `grunt app-dev` : Install dev environment
* `grunt app-prod`: Install prod environment
* `grunt app-build` : Install dev & prod environments


test