---
title: Early Intermediate Piano Pieces Video Playlist
layout: watchpage
lang: en
permalink: /early-intermediate/video-playlist/
page_id: ebook-playlist
description: |
  Video playlist to accompany Early Intermediate Piano Pieces by Selen Apaydin. 23 curated compositions for students and teachers transitioning from beginner to intermediate levels.
carousels: true
hidefeature: true
---

{% include carousel.html playlist=site.data.early-intermediate.playlist %}

{% assign items=site.data.ebook.cards[site.active_lang] %}
<section id="wide-div">
  <section class="hero" id="blog">
    {% for item in items %}
        {% include index-card.html %}
    {% endfor %}
  </section>
</section>

{% include button.html text="Read more on repertoire curation" link="/repertoire/" %} {% include button.html text="e-Book Early Intermediate Piano Pieces" page_id="ebook" %} 
