---
layout: page
title: ThinkGarden's Blog
tagline: 
---
{% include JB/setup %}
<h3>若你喜欢怪人，其实我很美.</h3>
<p>最新文章</p>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>





