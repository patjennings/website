---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Je suis Thomas Guesnon
---

Et je suis designer et développeur. Étrange, non ? Pas tant que ça, en fait. Après avoir passé une dizaine à pratiquer en tant que designer, dans des agences web ou de conseil en design d'interfaces, je me concentre désormais sur la façon de réaliser les choses. Je fais donc du développement Javascript, pur, ou bien avec des frameworks comme React ou Vue. J'utilise également PHP ou Python.

En tant que designer, je suis intervenu sur des projets de conception et de réalisation d’interfaces (ui), sur des vidéos, des installations numériques, sur des aspects graphiques, de *motion design*, d'illustration.

[Je consigne des notes]({{site.url}}/notes/) relatives à des ressources ou des articles que j'ai pu glaner sur les internets, et qui influencent ma pratique.

Je suis également libriste, ce qui signifie que j’utilise des [logiciels libres](https://fr.wikipedia.org/wiki/Culture_libre#%C3%89mergence_du_mat%C3%A9riel_libre_?_(2010-)) dans ma pratique quotidienne, et je tente à mon niveau de respecter et encourager les notions d’ouverture et de liberté promues par la culture libre.

Après avoir passé cinq ans au sein de l'école des beaux-arts de Caen, je cumule une dizaine d’années d’expérience au sein de plusieurs agences de communication, de web ou de conseil en design d’interfaces. J’y ai travaillé sur des projets d’interfaces mobiles ou embarqués, sur des applications professionnelles ou grand public, sur des sites web, des identités graphiques, des [design systems](https://apptitude.ch/developpement/design-system-et-collaboration/) ou des films d’animation.

Je vis et travaille à Quimper.

## Projets en cours ##
- Un time tracker
- Tyto, un 

### Travaux ###
{% for project in site.projects reversed %}
- [{{ project.title }}]({{ project.url | relative_url }}) {{ project.date | date: "%Y" }}{% endfor %}


### Articles ###
  {% for article in site.articles reversed %}
- [{{ article.title }}]({{ article.url | relative_url }}) {{ article.date | date: "%d/%m/%Y" }}{% endfor %}

### D'autres endroits ###
- [Mastodon](https://mastodon.social/@patjennings)
- [Git](https://framagit.org/patjennings)
- [LinkedIn](https://www.linkedin.com/in/thomas-guesnon/)

### Pour discuter ###

- Le mail : hello(arobase)thomasguesnon(point)fr
- IRC : thomasguesnon@chat.freenode.net
- Skype : thomas.guesnon32
- Jabber : thomasguesnon@im.apinc.org
