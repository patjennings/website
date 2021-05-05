---
layout: article
title: Documenter le design
date:   2021-03-16 16:21:00 +0200
categories: article
author: Thomas
excerpt_separator: <!--more-->
---

Il y a quelques mois, j'ai été missionné par Cobuy pour produire les interfaces de son produit.

J'ai saisi cette opportunité pour produire une documentation qui me satisferait. La documentation des principes de design est une étape cruciale de la conception d'applications et de services.

## Qu'est-ce qui pose problème, exactement&nbsp;? ##

Au cours des années, j'en ai produit différents types, avec toujours des choses qui me posaient problème et, surtout, **qui nuisaient à la qualité de l'information**. Les deux cas de figure qui me viennent à l'esprit sont :
- Le design est documenté dans l'outil de suivi de ticket. Ici, on est dépendant de la structure propre à la gestion des tickets. Et au final, les intentions de design ne sont plus claires. Elles sont diluées dans des problématiques techniques qui leur font perdre leur effet de système. 
- Un fichier est transmis à tous les participants du projet. Ici, on a un bloc d'information à partager, ce qui est bien, car on garde ensemble, ordonnées, les principes de design. Le problème : toute l'information est statique. Statique, au sens du mouvement, impossible à intégrer dans un pdf. Et statique du point de vue de la gestion de projet : modifier une information et la partager à nouveau à tous les participants à un coût important.

La documentation doit :

- Expliquer la démarche de design
- Offrir un référentiel clair et précis
- Aider les participants du projet à visualiser le même objectif
- Accompagner l'évolution du projet

## Ma tambouille ##

Donc, 'objectif est  dep roduir e quelque chose qui soit didactique, précis, *scalable*, et toujours à jour.

J'ai choisi l'option de créer un site web statique. Pourquoi ? Bien sûr, des services tiers existent pour créer des documentations. Mais ils sont orientés technique (storybook, ) , soit ils n'offrent pas assez de liberté pour (bookstack). Et en plus, on prévient les problèmes de confidentialité sur certains projets.

Je me sers de Jekyll pour site web personnel, et je trouve le principe simple et efficace. Il permet des mises à jour régulières, n'est pas gourmand et peut tourner sur un serveur très rudimentaire. Avec l'intégration continue de Gitlab, je peux pousser en continu des améliorations sur la documentation.

### Didactique ###

(image avec nav) L'organisation essaie de séparer autant que possible les aspects d'organisation de l'information des aspects visuels

J'embarque Bootstrap dans le site, ce qui me permet de créer rapidement des exemples d'agencement de composants. On peut travailler le libellé des actions, l'ordre des items des menus (ou l'*UX writing*). Avec les éléments de base offerts par Bootstrap.

Ce qui est intéressant, c'est  : état des boutons, menus, sans produire images. On peut rapidement reprendre, et même faire évoluer ces agencements sans produire d'images et manipuler wireframes. Il faudra toujours créer des wireframes ou des simulations d'interface pour expliquer certains principes, mais 

### Précis ###
Comme on a les coudées franches, on peut aisément intégrer des éléments très utiles aux développeurs.
Les animations d'éléments d'interface peuvent être intégrées, et le code mis à disposition. Idem pour les graphes. J'utilise ici ChartJS, ce qui me permet d'intégrer directement dans le contenu des exemples de graphes

### Scalable ###

Si une nouvelle itération a lieu, la documentation sera mise à jour. Une nouvelle page par sprint, ou une page de log, listant les modifications effectuées à chaque étape, sur le principe du commit git. Tout est envisageable, l'idée étant de tracer l'information sans nuire à la clarté.

### Toujours à jour ###

Avoir un site toujours up to date est estimable en contexte de projet. On peut d'ailleurs faire cohabiter le design et le développement, en intégrant des pointeurs dans les tickets ouverts par l'équipe de développement. L'information est accessible sans être diluée dans un contexte
       
	   
Pour projet simple, sans un design system très évolué. On peut séparer le aspects visuels des principes de conception. rien n'interdit, ensuite, dans le cadre d'un design system plus évolué, de remplacer Bootstrap par sa propre librairie. Gros boulot, mais c'est envisageable.

