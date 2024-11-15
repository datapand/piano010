---
title: Testing page
menu_title: Test
feature_text: |
  Test Page
layout: page
lang: nl
permalink: /testing/
page_id: testing
excerpt: |
  Testing desc
---


{% assign active_lang_pages = site.html_pages | where: 'lang', site.active_lang %}
{% for page in active_lang_pages %}
  {{ page.title }}
{% endfor %}


<pre>
    site.pages: {{ site.pages | jsonify | escape }}
    site.html_pages: {{ site.html_pages | jsonify | escape }}
    site: {{ site | jsonify | escape }}
    page: {{ page | jsonify | escape }}
    layout: {{ layout | jsonify | escape }}
    content: {{ content | jsonify | escape }}
    paginator: {{ paginator | jsonify | escape }}
</pre>