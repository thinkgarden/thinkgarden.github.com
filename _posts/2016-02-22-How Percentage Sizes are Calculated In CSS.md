---
layout: post
title: How Percentage Sizes are Calculated in css
category: web前端
tags: [web前端]
---

### Browser defaults behavior

* The html and body elements are distinct block-level entities, in a parent/child relationship.
* The html element's height and width are controlled by the browser window.
* It is the html element which has (by default) overflow:auto, causing scrollbars to appear when needed.
* The body element is (by default) position:static, which means that positioned children of it are positioned relative to the html element's coordinate system.
* In almost all modern browsers, the built-in offset from the edge of the page is applied through a margin on the body element, not padding on the html element.

###Make <body> Take Up 100% of the Browser Height
what I wanted to do was make the body element take up the full height of the page.

    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #FFCC00;
    }

when I previewed this page in the browser, This is what i saw:

![preview img](https://www.kirupa.com/html5/images/what_you_see_72.png)

From what You and I can see, the body element seems to take up the full size of the page. The yellow background color we specified in the CSS fills up everything. Life seems good. Right? Despite what you see, this is one of the many cases involving HTML and CSS where looks can be deceiving. Your body element literally has a height of 0.

In HTML and CSS, some of the greatest mysteries revolve around two things:

    What an element's size should be
    What that element's size actually ends up being

    <!DOCTYPE html>
    <html>

    <head>
      <title>Guess the height!</title>
      <style>
        body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #FFCC00;
        }
      </style>
    </head>

    <body>

    </body>

    </html>


This is the full markup for the example you saw earlier, and if you preview all of this in your browser, you'll see an empty page with a yellow background. Our goal is to have our body element take up the full height of the page, and despite overwhelming evidence to the contrary, that isn't happening right now. You can verify that this isn't happening when you inspect the height of the body element using an in-browser development tool such as what you get with Chrome:

![body height 0](https://www.kirupa.com/html5/images/chrome_dev_tools2.png)

Notice that the reported height of the body element in the box model visualization is in fact 0 pixels. This means that your body element might as well not exist from a visual point of view. What is going on here?

To fully understand what is going on here, let's learn a bit about how the html and body elements are sized along with some general height calculation trivia. By default, both the `html` element and `body` element have their height CSS property set to `auto`. This means they don’t have an explicit height out of the box. They’ll either *take up whatever height they are told to be, or they will take up whatever height of the content that is inside them.*

Let’s revisit our CSS:

  body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #FFCC00;
  }

Doesn't the highlighted line satisfy the "they'll take up whatever height they are told to be" part of what I wrote earlier? The answer is “No” and the reason has to do with what a percentage value for height actually means. Allow me to bore you with the relevant information from the spec:

>The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to 'auto'. A percentage height on the root element is relative to the initial containing block.

The emphasized part holds the key. See, our body element's height is set to be 100% of the height of the containing block. The containing block is the html element, and we never specified a height on it. Because there isn’t any content on the page, the height of the html element...wait for it...is also 0. The solution to our problem then would be to specify a height value of 100% on the html element as well:

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #FFCC00;
    }
    html {
        height: 100%;
    }

Once you do this, the height of our body element naturally becomes the 100% height that we had always wanted it to be:

![body size](https://www.kirupa.com/html5/images/body_is_not_0_size.png)

There is just one more thing we need to do. Your body element will often contain more content than can be displayed in one screen of your browser. In such cases, you will want a scrollbar to appear and not have your body element's size fixed to whatever initial size your browser was. There is an easy fix to address this valid concern - replace the height property on the body element with min-height instead:

    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
        background-color: #FFCC00;
    }
    html {
        height: 100%;
    }

This will ensure your body element's size grows along with the content inside it. If you have no content in your body element, the body will take up all the space available to it anyway.

###结论
元素的高度除了取决于自身的height外还受包裹其本身的父元素的高度决定，虽然body的height是100%，但包裹其的父元素html的高度为auto，所以body得最大高度也为auto。

* Default Browser Settings -- if viewport is greater than the content, the body does not fill the screen

* html{height: auto}, body { height: 100%; } -- if content is greater than the viewport, body seems to only be the height of the viewport

为了更好的说明请看[codepen的例子](http://codepen.io/slowfish/pen/NxZwBO)
