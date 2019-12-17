---
layout: home
title: thomas guesnon
---

Mon travail consiste à concevoir et à réaliser des applications web ou mobiles, des identités graphiques ou des sites web. Je résous des problèmes visuels et ergonomiques, et j'interviens sur le développement de l'application (front-end).

En tant que designer, j'ai participé à la conception d’interfaces (ui) pour des applications [*web*]({{site.url}}/projects/suez-design-system "Suez Aquadvanced"), [mobiles]({{site.url}}/projects/efb "Electronic Flight bag"), [*responsive*]({{site.url}}/projects/hug "Yoodo pour Arkadin") ou [embarquées]({{site.url}}/projects/avionics-2020 "Avionics 2020"), sur des [vidéos]({{sites.url}}/projects/motion "Motion 2018"), des [sites *web*]({{site.url}}/projects/restlet-website "Restlet website"), des [installations]({{sites.url}}/projects/ez-go "Ez Go pour Renault"), sur des aspects graphiques, ergonomiques et fonctionnels. Auparavant, j'ai passé cinq ans à l'école des beaux-arts de Caen. 

[<i class="ico ico-medium">arrowright</i>&nbsp;Voir les références](/references)

Je passe du temps à concevoir mes outils, quand je ne trouve pas ce que je cherche ailleurs. J'ai ainsi conçu un [set d'icônes](http://platform.thomasguesnon.net/pajeweic/) que j'utilise dans les interfaces que je développe. J'ai également créé un outil, [SVGSpecs](https://framagit.org/patjennings/svg-specifications "SVG Speccs"), permettant de communiquer des spécifications graphiques sur des interfaces graphiques à destination des développeurs front-end.

Je vis et travaille à Quimper.

> ![profile pic](/assets/images/profile-picture.jpg)


### Quelques projets ###
<br/>
{% include mosaique.html %}

### C'est en cours ###

- [PisteurDeTemps]({{site.url}}/pisteur-temps "Pisteur de temps"), un gestionnaire de temps passé
- [Tyto](http://tyto.thomasguesnon.net "Tyto") est un outil de visualisation de données, basé sur markdown et la cartographie
- [SVGSpecs]({{site.url}}/articles/2019/03/06/2019-03-07-inkscape.html#spécification-dinterface "SVG Specs") permet de récupérer des spécifications graphiques
<br/><br/>

### Articles ###
Quelques réflexions, sur le design et d'autres sujets.
{% for article in site.articles reversed %}
- [{{ article.title }}]({{ article.url | relative_url }}) <sup>{{ article.date | date: "%d/%m/%Y" }}</sup>{% endfor %}
