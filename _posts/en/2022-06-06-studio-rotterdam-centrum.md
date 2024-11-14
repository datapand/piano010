---
title: Studio in Rotterdam Centre
categories:
- Piano lessons
excerpt: |
  Piano lessons with Selen Apaydin, a classical pianist with 20 years of experience. Offering private lessons for all levels, in-person in Rotterdam Centrum or online. Learn music theory, artistic values, and composition techniques. Enhance your skills with expert guidance from a concert pianist!
feature_text: |
  Studio in Rotterdam Centre
feature_image: https://picsum.photos/2560/600?image=733
image: "https://picsum.photos/2560/600?image=733"
lang: en
page_id: studio
---


### Pianos


### Address 

{% include g-map.html %}

```json
{{ site.posts | jsonify }}

{% assign posts_in_lang = site.posts | where: 'lang', site.active_lang %}
{{ posts_in_lang | jsonify }}
```