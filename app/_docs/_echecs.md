---
title: Sur les échecs
layout: article
author: Thomas
tags: echecs jeu
excerpt_separator: <!--more-->
---
* table of contents
{:toc}

## L'échiquier ##

## Valeur des pièces ##
- ♙ pion : `1.0`
- ♘ cavalier : `3.2`
- ♗ fou : `3.33`
- ♖ tour : `5.1`
- ♕ dame : `8.81`

## Quelques équivalences ##

- ♗♙♙ = ♖
- ♘♙♙ = ♖
- ♙♙♙ < ♗
- ♕♘ > ♕♗
- ♖♖ > 

``` text
♖ -> augmente
-------------------> partie
♘ -> diminue
```
## Notation ##

- Notation FR = Notation EN = traduction
- Th8 = Th8 = Tour en h8
- Re2 = Ke2 = Roi en e2
- Dd7 = Qd7 = Dame en d7
- Fc5 = Bc5 = Fou en c5
- Cc3 = Nc3 = Cavalier en c3
- c5 = c5 = pion en c5

---

- \+ = échec
- ++ = double échec
- \# = échec et mat

## Quelques règles ##

- On n'échange pas les dames si le roi adverse est mal placé
- mettre échec en fin de partie (après échanges multiples de pièces)
  - On met le roi adverse "dans un réseau" (de pions, surtout). Puis on le coince avec un fou et une dame e.g.
- Trouver des **fourchettes**
- Chercher des **clouages**
- viser des cases
  - quels défenseurs pour quelles cases ?
- Apprendre des combinaisons par coeur (parer le coup qui fait une fourchette entre roi et cavalier)
- dès qu'on joue `Fg5`, on répond `h6`
- penser en terme de cases ― plus fort sur blanches ? sur noires ?
- dès qu'on peut prendre avec autre chose qu'un pion (cavalier e.g.), on fait. et à moins d'un échange massif en vue qui risque de nous coûter plus.

##### Quelques conseils de Manu #####

- Penser le jeu comme un rapport de force : tant qu'on n'a pas l'avantage aux pièces, ça ne sert à rien de penser à mettre mat
- Petit roque le plus vite possible
- relier les deux tours comme grosse défense
- ne faire que défendre les coups de l'adversaire n'est pas bon 
- privilégier les coups qui imposent des mouvements à l'adversaire
- Si le roi de l'adversaire n'est pas protégé, s'en servir comme point de pression
- Quand l'adversaire bouge : qu'est il en train de prévoir ?


### Attaque ###
- vérifier les clouages potentiels, pour prendre des pièces

### Défense ###
- le cavalier se replie

## Ouvertures ##

À travailler
- <https://www.chess.com/openings/Sicilian-Defense>
- <https://www.chess.com/openings/Caro-Kann-Defense>
- <https://www.chess.com/openings/Queens-Gambit>
- <https://www.chess.com/openings/French-Defense>
- <https://www.chess.com/openings/Reti-Opening>

### Défense sicilienne ###

> défense noirs, attaque blancs

La sicilienne répond à `1.e4`. Les noirs prennent le contrôle de `d4` avec un pion de côté.
Pour les blancs, on jouera ensuite `2.Cf3`. Ensuite, noirs jouents `2. …Cc6` ou `2. …d6`. `Cc6` permet de défendre `e4` si le pion reine des blancs attaquent le pion noir `c5` en `d4`.
Ensuite, développement. Les blancs font *grand roque* et les noirs *petit roque*.

## Ressources ##
- Échange de matériel : <https://www.apprendre-les-echecs.com/gagner-echanger-perdre-materiel/>
- <https://www.echecs.club/strategies/>
- Ressources PGN : <https://www.pgnmentor.com/files.html>
- <https://www.youtube.com/watch?v=2NxIamBRNIQ>
- SCID shortcuts : <http://scidvspc.sourceforge.net/doc/ShortCuts.htm>
- parties pédagogiques d eBlitzStream > <https://www.youtube.com/watch?v=zZLi7ftp3_c> 
- Apprendre les échecs, très bon site pour débutants : <https://www.apprendre-les-echecs.com/technique-echecs/>
