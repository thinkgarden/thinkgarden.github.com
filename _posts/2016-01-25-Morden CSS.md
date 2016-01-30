---
layout: post
title: Morden Css
category: web前端
tags: [web前端]
---

### BEM快速入门

#### Block

在BEM中Block是设计中的最高一级，整个网站都是由很多个块构建而成。一个块在网站上是独立的，理论上说块可以放置在你的布局的任何一个地方，甚至还可以嵌套在另一个块里面。

例如，在你的网站上的搜索表单块，你就可以使用.search-form类来表示。

#### Element

在BEM中的Element其实是Block中的一个元素。使用两个下划线__将元素的名称附加到其父块的名称后。

例如，一个搜索表单可能包括标题、文本框和提交按钮等元素，那么它们的类名可以命名成：.search-form__heading，.search-form__text-field和.search-form__submit-button。

#### Modifier

在BEM中Modifier是应用于Block或Element表示改变的描述，或者是状态改变。修饰符名称一般附加在Block或Element的后面。

在BEM的官方网站上，修饰符使用的一个_做为分隔符。但@Harry Roberts提供了一份类似于BEM的CSS指南规范中(把这种称为BEM-like方法)，使用两个破折号--做为分隔符，而且这种方式比BEM官方提供的命名方式使用更为广泛。

例如，在设计中你可能希望提供一个高级搜索表单的样式不同于常规的搜索表单样式。因为创建了一个修饰符(Modifier)来作为区分：BEM官网的命名方式.search-form_advanced，BEM-like的命名方式：.search-form--advanced。

比如例外一个例子，你希望给提交了一个无效内容，而此时你想要改变表单的外观状态。这样你也可以创建一个修饰符。.search-form_invalid(BEM官方)，.search-form__invalid(BEM-like)。
