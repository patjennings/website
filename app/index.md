---
layout: home
title: thomas guesnon
subtitle: design + développement
---

### ◑ ◎ ◉ ###

Je conçois et réalise des applications et des sites web, avec Javascript et des frameworks comme React. Je crée également des sites web avec des CMS comme Drupal ou Wordpress. J'accorde une importance centrale à l'ergonomie, la lisibilité et la hiérarchie des informations.

En tant que designer, j'ai participé à la conception d’interfaces (ui) pour des application [web]({{site.url}}/projects/yoodo "Yoodo pour Arkadin"), [mobiles]({{site.url}}/projects/efb "Electronic Flight bag") ou [embarquées]({{site.url}}/projects/airel "Airel"), sur des [vidéos]({{sites.url}}/projects/motion-2018 "Motion 2018"), des [sites web]({{site.url}}/projects/restlet-website "Restlet website"), des [installations]({{sites.url}}/projects/ez-go-renault "Ez Go pour Renault"), sur des aspects graphiques, ergonomiques et fonctionnels. Auparavant, j'ai passé cinq ans à l'école des beaux-arts de Caen.

Je passe du temps à concevoir mes outils, quand je ne trouve pas ce que je cherche ailleurs. J'ai ainsi conçu un [set d'icônes](http://www.thomasguesnon.fr/tools/pajeweic/) que j'utilise dans les interfaces que je développe. J'ai également créé un outil, [SVGSpecs](https://framagit.org/patjennings/svg-specifications "SVG Speccs"), permettant de communiquer des spécifications graphiques sur des interfaces graphiques à destination des développeurs front-end.

[Je consigne des notes]({{site.url}}/notes) relatives à des ressources ou des articles que j'ai pu glaner sur les internets, et qui influencent ma pratique.

Je vis et travaille à Quimper.

### C'est en cours ###

- [TimeTracker]({{site.url}}/time-tracker "Time Tracker"), un gestionnaire de temps passé
- [Tyto]({{site.url}}/tyto "Tyto") est un outil de visualisation de données, basé sur markdown et la cartographie
- [SVGSpecs]({{site.url}}/svg-specs "SVG Specs") permet de récupérer des spécifications graphiques

### Projets auxquels j'ai participé ###
{% for project in site.projects reversed %}
- [{{ project.title }}]({{ project.url | relative_url }}) <sup>{{ project.release-date }}</sup>{% endfor %}


### Articles ###
  {% for article in site.articles reversed %}
- [{{ article.title }}]({{ article.url | relative_url }}) <sup>{{ article.date | date: "%d/%m/%Y" }}</sup>{% endfor %}

### D'autres endroits ###
- [Mastodon](https://mastodon.social/@patjennings)
- [Git](https://framagit.org/patjennings)
- [LinkedIn](https://www.linkedin.com/in/thomas-guesnon/)

### Pour discuter ###

- Le mail : hello(arobase)thomasguesnon(point)fr
- IRC : thomasguesnon@chat.freenode.net
- Skype : thomas.guesnon32
- Jabber : thomasguesnon@im.apinc.org
