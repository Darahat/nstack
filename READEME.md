# Rhymes 
Rhymes is a NativeScript-built Android app for children to learn some beautiful and populer rhymes with Related images. 

* [Branches](#branches)
* [Screenshots](#screenshots)
* [Development](#development)
    * [Linting](#linting)
    * [Unit testing](#unit-testing)
    * [Travis CI](#travis)
* [Contributors](#contributors)


<h2 id="branches">Branches</h2>

This repository contains a branche:

* The [**master** branch](https://github.com/Darahat/Rhymes.git) shows how to build a robust, real-world app using NativeScript. The branch is built with vue.js.
This branch targets latest official release of {N}.



<h2 id="screenshots">Screenshots</h2>

![](rsz_screenshot_20180614-230221.png)
![](rsz_screenshot_20180614-230228.png)
![](rsz_screenshot_20180614-230243.png)
![](rsz_screenshot_20180614-230302.png)


<h2 id="development">Development</h2>
This app is built with the NativeScript-Vue CLI. Once you have the CLI installed, start by cloning the repo:


```
$ git clone https://github.com/Darahat/Rhymes.git
$ cd Rhymes
```


Now you have to install ```npm``` which will add dependencies according to ```package.json``` file.

``` bash
npm install
```
From there you can use the run command to run Rhymes on android:

```
npm run build:android
```

Build, watch for changes and debug the application
```
npm run debug:android
```

Build, watch for changes and run the application
```
npm run watch:<platform>
```

 Clean the NativeScript application instance (i.e. rm -rf dist)
```
npm run clean
```

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template

 Made With ❤️ By darahat

