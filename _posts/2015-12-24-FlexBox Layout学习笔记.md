---
layout: post
title: FlexBox Layout学习笔记
category: web前端
tags: [web前端]
---

### Why use Flexbox Layout
>Improve the items align, directions and order in the container even when they are with dynamic or even unknown size. The prime characteristic of the flex container is the ability to modify the width or height of its children to fill the available space in the best possible way on different screen sizes.

### Flexbox 优势太明显

在接触 Flexbox 之后我把 Flexbox 做的事情概括为两句话：1、提供了更好用的弹性布局；2、将硬盒变成了软盒。

上面的概括可能还是太抽象，我们不妨拿我们排版中经常遇到的问题来具象化。首先，横向排列 block 元素想必已经成为了前端的基本功，用到的方法无外乎 float 和 inline-block 两种，float 方法完全是对 float 属性驴唇马嘴的使用，inline-block 看起来很美但又不得不处理空隙问题，有了 Flexbox，你可以很方便的控制盒的排列方向来实现横向排列的 block，这就依托于 Flexbox 提供的更好的弹性布局。其次，三栏自适应布局这种同样属于前端基本功的排版，其实现方法也相当的不优雅，最重要的是自适应的栏只能有一个，有了 Flexbox，不依赖 JavaScript 实现多栏同时自适应变得易如反掌(至少相对于目前的蹩脚方法是这样)，这种便利是 Flexbox 将硬盒变成了软盒所带来的福利。

那么总体来讲，Flexbox 到底解决了哪些以前 CSS 没能解决好的问题呢? 参考 [https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) 。

### 直观认识 Flexbox

1 多栏布局高度自适应

在多栏布局中使所有栏的高度自适应内容最多一栏的高度是一项繁琐的工作，一般使用 padding 配合负 margin，或 table 布局来实现。如果使用 Flexbox 来实现，根本不需要任何额外代码：

HTML

        <div class="flex">
          <div>This column contain more content</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
        </div>

CSS

        .flex {
          display: flex;
          width: 600px;
        }
        .flex div {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          margin: 0 10px;
        }
        .flex div:first-child {
          margin-left: 0;
        }
        .flex div:last-child {
          margin-right: 0;
        }

效果

![效果](http://zjy.name/usr/uploads/flex/flex-1.png)

2 双飞翼布局

两个侧栏宽度固定，中间一栏宽度自适应的双飞翼布局可以称得上前端的基本功了。双飞翼布局一般采用 margin 配合 float 和 absolute 实现。而放在 Flexbox 中则变得易如反掌：

HTML

        <div class="flex">
          <div class="left">Left Column</div>
          <div class="main">Main Content</div>
          <div class="right">Right Column</div>
        </div>

CSS

        .flex {
          display: flex;
          width: 100%;
        }
        .left, .right {
          width: 200px;
          background: rgba(0, 0, 0, 0.2);
        }
        .main {
          flex: 1;
          height: 100px;
          background: rgba(0, 0, 0, 0.4);
        }

效果

![效果](http://zjy.name/usr/uploads/flex/flex-2.png)

### flex container常用属性

定义容器的display属性

    .box{
        display: -webkit-flex; /*webkit*/
        display: flex;
    }

    /*行内flex*/
    .box{
        display: -webkit-inline-flex; /*webkit*/
        display:inline-flex;
    }

#### 容器样式

    .box{
        flex-direction: row | row-reverse | column | column-reverse;
        /*主轴方向：左到右（默认） | 右到左 | 上到下 | 下到上*/

        flex-wrap: nowrap | wrap | wrap-reverse;
        /*换行：不换行（默认） | 换行 | 换行并第一行在下方*/

        flex-flow: <flex-direction> || <flex-wrap>;
        /*主轴方向和换行简写*/

        justify-content: flex-start | flex-end | center | space-between | space-around;
        /*主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布*/

        align-items: flex-start | flex-end | center | baseline | stretch;
        /*交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*/

        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
        /*多主轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布*/
    }

#### 子元素属性

    .item{
        order: <integer>;
        /*排序：数值越小，越排前，默认为0*/

        flex-grow: <number>; /* default 0 */
        /*放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）*/

        flex-shrink: <number>; /* default 1 */
        /*缩小：默认1（如果空间不足则会缩小，值为0不缩小）*/

        flex-basis: <length> | auto; /* default auto */
        /*固定大小：默认为0，可以设置px值，也可以设置百分比大小*/

        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
        /*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，*/

        align-self: auto | flex-start | flex-end | center | baseline | stretch;
        /*单独对齐方式：自动（默认） | 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*/
    }

### 其他
注意，flex-direction 属性影响了 align-items 和 justify-content 的效果。把 flex-direction 想象为一个箭头，指向元素布局的方向。

justify-content - 控制着元素应该放在箭头上的什么位置。

align-items - 控制着箭头本身应该放在容器的什么位置。

align-self 可以对 Flex 容器中某个指定的元素的赋与不同的 align-item 值。

设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。


### flexbox 学习资源
[https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

[https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox/flexbox-basics-and-terminology](https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox/flexbox-basics-and-terminology)

[http://flexbox.io](http://flexbox.io)

[http://www.fullstackradio.com/24](http://www.fullstackradio.com/24)

