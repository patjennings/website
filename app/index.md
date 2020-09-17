---
layout: home
title: thomas guesnon
---

**Je suis designer. Mon travail consiste à résoudre des problèmes visuels, ergonomiques et fonctionnels sur des interfaces utilisateur, afin d'aider un utilisateur à se servir d'un produit et à y trouver confort et efficacité.**

J'utilise mes compétences pour concevoir des applications web ou natives, créer des prototypes ou des animations vidéos de concepts d'applications, hiérarchiser l'information et documenter la conception.<br/>
J'aide les parties prenantes à définir leur vision d'un projet d'application.

J'ai travaillé, notamment, pour des projets aéronautiques, de transport, pour la santé, l'éducation ou l'automobile.

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




