---
layout: post
title: How Percentage Sizes are Calculated in css
category: web前端
tags: [web前端]
---

In HTML and CSS, some of the greatest mysteries revolve around two things:

    What an element's size should be
    What that element's size actually ends up being

### Browser defaults behavior
* The html and body elements are distinct block-level entities, in a parent/child relationship.
* The html element's height and width are controlled by the browser window.
* It is the html element which has (by default) overflow:auto, causing scrollbars to appear when needed.
* The body element is (by default) position:static, which means that positioned children of it are positioned relative to the html element's coordinate system.
* In almost all modern browsers, the built-in offset from the edge of the page is applied through a margin on the body element, not padding on the html element.
