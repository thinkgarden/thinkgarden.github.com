---
layout: post
title: using data URIs in css
category: web前端
tags: [web前端]
---
> Data URIs allow any file to be embedded inline within CSS

#### 为什么Data URL是个好东西
当访问外部资源很麻烦或受限时
当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时。
当图片的体积太小，占用一个HTTP会话不是很值得时。

Data URL也有一些不适用的场合

1、Base64编码的数据体积通常是原数据的体积4/3，也就是Data URL形式的图片会比二进制格式的图片体积大1/3。

2、Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次。这是一个使用效率方面的问题——尤其当这个图片被整个网站大量使用的时候。

Data URIs are always of this format:

	data:[<mediatype>][;base64],<data>


mediatype can be any of the Content Types. The Content Types most useful for CSS are:

* font/opentype
* application/x-font-ttf
* image/png
* image/gif
* image/jpeg
* image/svg+xml


#### Embedding Images in CSS
Any CSS property that uses the src function can use Data URI scheme to embed data. This means, you can embed a CSS sprite like:

	.button {
	    background:url(data:image/png /*embed code */)
	}                                               

	.button.active {
	    background-position:0 -40px;
	}                         

	.button:hover {
	    background-position: 0 -20px;   
	}

#### Embedding Web Fonts in CSS
