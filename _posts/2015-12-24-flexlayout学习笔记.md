---
layout: post
title: flexlayout学习笔记
category: web前端
tags: [web前端]
---

### why use flexbox layout
>Improve the items align, directions and order in the container even when they are with dynamic or even unknown size. The prime characteristic of the flex container is the ability to modify the width or height of its children to fill the available space in the best possible way on different screen sizes.

### flexbox 优势太明显

Peter 本人其实非常喜欢折腾 CSS 的，对 float position 等各种排版技巧也算是很熟练了，我几乎可以默写出 clearfix 的那几行 CSS 来。但是，用上了 flexbox 才发现，原来的日子还是太不方便了。这也难怪 flexbox 不就是发明出来，解决原来那些布局中的痛苦的嘛？而且 flexbox 还有专门的适合响应式设计的各项功能。

那么总体来讲，Flexbox 到底解决了哪些以前 CSS 没能解决好的问题呢? 参考 [https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) 。



### flex container常用属性

#### 定义容器的display属性

    .box{
        display: -webkit-flex; /*webkit*/
        display: flex;
    }

    /*行内flex*/
    .box{
        display: -webkit-inline-flex; /*webkit*/
        display:inline-flex;
    }

####容器样式

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


### flexbox 学习资源
[https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

[https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox/flexbox-basics-and-terminology](https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox/flexbox-basics-and-terminology)

[http://flexbox.io](http://flexbox.io)

[http://www.fullstackradio.com/24](http://www.fullstackradio.com/24)

