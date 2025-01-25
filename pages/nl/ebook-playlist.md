---
title: Early Intermediate Pieces Video Playlist
layout: watchpage
lang: nl
permalink: /video-playlist/pianostukken/vroeg-intermediaire/
page_id: ebook-playlist
description: |
  Videolijst ter begeleiding van Early Intermediate Piano Pieces door Selen Apaydin. 23 zorgvuldig geselecteerde composities voor studenten en docenten die de overgang maken van beginners- naar intermediate-niveau.
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

{% include button.html text="Meer over repertoire curatie" link="/repertoire/vroege-intermediair/early-intermediate" %} {% include button.html text="e-Book Early Intermediate Piano Pieces" page_id="ebook" %} 

