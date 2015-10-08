---
layout: post
title: 摩登前端开发笔记
date: 2015年10月8日
---

###<div style="text-align">Stage1</div>
####git使用技巧：在.gitconfig文件中配置git常用快件键
```
[alias]
ci = commit -a -v
st = status -s
br = branch
throw = reset --hard HEAD
thrown = reset --hard HEAD^
```

####安装Node
1、Mac安装直接去node官网下载pkg安装包
执行下面语句，看到正确的版本输出，那么 node 就安装好了。
```
$ node -v
v0.12.7
```
更改全局安装路径
默认情况下，npm 全局装包会安装到 /usr/local/ 之中，默认情况下，如果不用 sudo ，很可能会报权限错误。最好的方式是修改一下全局安装的位置.<br>

具体步骤如下：<br>

首先来到当前用户主目录下，新建安装位置<br>
```
$ cd ~
$ mkdir .npm-global
```
然后来把 npm 全局安装位置改为这个文件夹<br>
```
$ npm config set prefix '~/.npm-global'
```
可执行文件的路径也要导出一下，到您命令行的启动加载文件中，例如我用的是bash ，所以是 ~/.bash_profile，默认情况下可能是 .bashrc 或者 .profile 文件，添加下面内容：
```
export PATH=~/.npm-global/bin:$PATH
```
然后使用source命令加载一下
```
$ source ~/.bash_profile
```
接下来就可通过npm安装包了，例如全局安装gulp
```
$npm i -g gulp
$which gulp
/Users/peter/.npm-global/bin/gulp
```
####gulp+sass预处理css

####安装 gulp

前提是 nodejs 已经装好。这样，先来把 gulp 全局安装一次<br>
```
$ npm i -g gulp
```
这样的目的是为了拥有 gulp 这个系统命令。前面 安装 node 一集已经提过了。<br>

然后，新建项目，比如<br>
```
$ mkdir project
$ cd project
```
进入项目后，还要把 gulp 在项目内安装一次
```
$ npm init # 生成一个 package.json 文件
$ npm i --save-dev gulp
```
这样做的目的是，保证项目内部的 gulpfile.js 中，使用 `require('gulp')` 的时候不会报错。

####安装sass
到项目文件夹内
```
npm i --save-dev gulp-sass
```
注意，gulp-sass 依赖于 libsass ，这是一个 C++ 的包，需要在本地编译，所以要确保本地 Mac 机器上是有 Xcode 的。 装好之后，gulpfile.js 中写下面的内容
```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('main.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'));
});
```
####强大的 gulp 管道线
比如，还可以扩展添加 gulp-autoprefixer 进来

```
$ npm i gulp-autoprefixer -D
```
然后到gulpfile.js中添加
```
var prefix = require('gulp-autoprefixer');
        .pipe(prefix())
```
这样，在输出的 main.css 中，就可以看到 vendor prefix 已经自动添加了。




