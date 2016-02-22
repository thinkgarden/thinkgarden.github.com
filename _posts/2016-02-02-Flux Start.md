---
layout: post
title: Flux start
category: web前端
tags: [web前端]
---

### What is Flux
Flux is an `events-driven publish/subscribe system (pubsub)`. When a user interacts with the application, a message is broadcasted throughout the entire system. Any component of the system can decide whether it should respond or ignore an event. There is no centralized control.

### The NodeJS "events" Module
EventEmitter is from NodeJS' standard library. Webpack would automatically find the events module from NodeJS, so you don't need to install the "events" package with npm.

Now we remove the controller, and glue code together with pubsub instead:
![流程图](http://app.sike.io/courses/react/buyshoes-flux/events-search-suggestions.jpg)


