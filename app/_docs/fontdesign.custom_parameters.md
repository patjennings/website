---
title: FontForge/Glyphs, paramètres personnalisés
layout: article
author: Thomas
tags: typographie fontforge glyphs
excerpt_separator: <!--more-->
---
* table of contents
{:toc}


## Métriques verticales et paramètres OpenType ##

Cet article traite de l'alignement des glyphes d'une police d'icone, exportée avec différents réglages de caractère, d'un logiciel de dessin de fonte vers OpenType (`.otf`, `.woff`, `.eot`). On s'attarde sur des exemples qui ont posé problème une fois intégrés dans des pages web. On voit l'implication des paramètres personnalisés dans l'alignement vertical des glyphes, à l'export.

> On parle ici de **Glyphs**, mais cet exemple est également applicable à **FontForge**. Dans FontForge, ces réglages sont accessible dans les infos de fonte (`Élément > Infos fonte`), puis répartis entre `Général` et `OS/2 > Métriques`

Dans Glyphs, tout se déroulera dans cette fenêtre des informations de police.

![Glyph settings](/assets/images/docs/fontdesign-glyph-settings.jpg)

D'abord, un point sur ces réglages. La partie *Mesures* concerne les réglages internes à Glyphs. On les verra donc directement dans le logiciel. 

En dessous, les paramètres personnalisés (*Custom Parameters*) reprennent ces réglages, mais pour l'export, et tels qu'ils seront interprétés en fonction de la plateforme sur lequel le caractère sera lu. Ainsi, en fonction de l'OS, on lira ou les paramètres commencant par `typo…`, ou ceux par `hhea…` ou ceux par `win…`. Pour faire vite, les devices Apple utiliseront plutôt `hhea`, et les autres machines plutôt `typo` ou `win`. [Cet article](https://glyphsapp.com/tutorials/vertical-metrics) traite le sujet de façon plus complète. C'est une bonne idée d'effectuer ces réglages personnalisés, car les mesures de Glyphs produisent des résultats non maîtrisés. Mais il faut veiller à renseigner des valeurs cohérentes pour ces paramètres, sous peine d'avoir des comportements erratiques une fois les fontes utilisées en contexte…

On s'intéresse ici aux paramètres des ascendantes et des descendantes. Les premiers s'inscrivent au dessus de la ligne de base (bleu dans les illustrations), les autres en dessous (jaune). **Mais, dans le navigateur, c'est l'addition de la hauteur des deux qui détermine le centre en hauteur, et donc le pivot**, qui servira par exemple pour des rotations css. Si ce pivot est décalé optiquement par rapport au dessin de l'icone, le résultat est une icone qui tourne de façon inélégante autour de ce point. Sur les illustrations ci-dessous, ce centre vertical est matérialisé par la ligne pointilée rouge.

## Cas 1 ##

Premier cas de figure. Voici les réglages de la fonte.

#### Mesures Glyphs ####

``` text
Unité par cadratin    : 1776

ascendante            : 1776
descendante           : -444
```


#### Paramètres personnalisés ####

``` text
typoAscender          : 1776 
typoDescender         : 0

hheaAscender          : 2131
hheaDescender         : 0

winAscent             : 2131
winDescent            : 0
```
#### Résultat ####
![export 1](/assets/images/docs/fontdesign-export-1.jpg)

Les paramètres de `hhea`/`win` d'une part, et de `typo` d'autre part, sont incohérents. L'ascendante des premiers est égale à `2131`, tandis que celle du second vaut `1776`, comme les paramètres internes à Glyphs. L'icone semble alignée dans sa boîte bleue, dans le logiciel, mais, à l'export, l'augmentation de la hauteur déplace le point de pivot vers le haut, donnant l'impression d'une icone "trop basse".

## Cas 2 ##

Deuxième cas de figure.

#### Mesures Glyphs ####

``` text
unité par cadratin    : 1776

ascendante            : 1776
descendante           : -444

```


#### Paramètres personnalisés ####

```text
typoAscender          : 1776 
typoDescender         : 0

hheaAscender          : 1776
hheaDescender         : -1776

winAscent             : 1776
winDescent            : 1776
```

#### Résultat ####

![export 2](/assets/images/docs/fontdesign-export-2.jpg)

Ici, on a ajouté la valeur d'ascendance à la valeur descendante (!). Ce réglage a pour effet de déplacer le point de pivot sous le dessin, car la hauteur cumulée de l'ascendante et de la descendante vient déterminer ici le centre vertical. Dans le navigateur, l'icone semble bien "trop haute".

## Cas 3 ##
Troisième et dernier exemple, qui produit un résultat correct.

#### Mesures Glyphs ####

``` text
unité par cadratin    : 1920

ascendante            : 1920
descendante           : -240
```


#### Paramètres personnalisés ####

``` text
typoAscender          : 1920 
typoDescender         : -240

hheaAscender          : 1920
hheaDescender         : -240

winAscent             : 1920
winDescent            : 240
```
#### Résultat ####
![export 3](/assets/images/docs/fontdesign-export-3.jpg)

On obtient ici un résultat plus conforme. 
À noter : le décalage vers le bas du dessin, dans le logiciel (et dans le bloc bleu), qui est produit par la nouvelle unité par cadratin de 1920. Ce décalage est corrigé par les paramètres personnalisés des valeurs de descendante, qui, une fois cumulés aux réglages d'ascendante, produisent l'alignement correct du dessin de l'icone sur le point de pivot.

