---
layout: home
title: thomas guesnon
---

**Je suis designer. Mon travail consiste à résoudre des problèmes visuels, ergonomiques et fonctionnels sur des interfaces utilisateur, afin d'aider un utilisateur à se servir d'un produit et à y trouver confort et efficacité.**

Je conçois des interfaces utilisateur pour des applications [*web*]({{site.url}}/projects/suez-design-system "Suez Aquadvanced"), [mobiles]({{site.url}}/projects/efb "Electronic Flight bag"), [*responsive*]({{site.url}}/projects/hug "Hug"), [embarquées]({{site.url}}/projects/avionics-2020 "Avionics 2020"). Je réalise des [vidéos]({{sites.url}}/projects/motion "Motion 2018"), des illustrations, des icones. Je participe à la réalisation [d'installations]({{sites.url}}/projects/ez-go "Ez Go pour Renault").

<div style="width:100%; text-align:center; margin:3rem 0;">
<a type="button" class="btn btn-outline-primary" href="/references">Les références</a>
<a type="button" class="btn btn-outline-primary" href="/projets">Quelques projets</a>
</div>

En parallèle, je passe du temps à concevoir mes outils, quand je ne trouve pas ce que je cherche ailleurs. J'ai ainsi conçu un [set d'icônes](http://platform.thomasguesnon.net/pajeweic/) que j'utilise dans les interfaces que je conçois. J'ai également créé un outil, [SVGSpecs](https://framagit.org/patjennings/svg-specifications "SVG Speccs"), permettant de communiquer des spécifications graphiques sur des interfaces graphiques à destination des développeurs front-end.

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




