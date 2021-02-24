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

### Attaque ###
- vérifier les clouages potentiels, pour prendre des pièces

### Défense ###
- le cavalier se replie

## Ressources ##
- Échange de matériel : <https://www.apprendre-les-echecs.com/gagner-echanger-perdre-materiel/>
- <https://www.echecs.club/strategies/>
- Ressources PGN : <https://www.pgnmentor.com/files.html>
- <https://www.youtube.com/watch?v=2NxIamBRNIQ>
- SCID shortcuts : <http://scidvspc.sourceforge.net/doc/ShortCuts.htm>
- parties pédagogiques d eBlitzStream > <https://www.youtube.com/watch?v=zZLi7ftp3_c> 
- Apprendre les échecs, très bon site pour débutants : <https://www.apprendre-les-echecs.com/technique-echecs/>

## Cas rencontrés ##
Qu'est ce qui a merdé là-dedans ? Ça finit en fourchette entre ma tour et mon roi (6… Cc2). Je joue les blancs.

``` text
1. d4 Cc6
2. Cc3 d5 
3. e4 dxe4 
4. d5 Cd4 
5. Cxe4 Ff5
6. Cc5 Cxc2+ 
7. Re2 Cxa1
```

Problème sur `4.d5 Cd4`, je libère la case `d4`, qu'il vient occuper avec son cavalier, et de là peut prendre `c2` et faire sa fourchette

## Quelques conseils de Manu ##

``` text
*Jobijoba00000*: Ok moi ce qui m a aidé c est penser le jeu au début comme un rapport de force tant que t as pas l avantage aux pièces ça sert à rien de penser à mettre échec et mat
*Jobijoba00000*: Dans un premier temps pense destruction de l adversaire des pièces. Le truc dur à gérer c est le déploiement protège, ne pas sous estimé les pions et surtout avancer protéger en mode les pièces se protègent en elle. Moi je joue agressif aussi à un moment je cherche le pion ou la pièce qui tient le plus La Défense adverse ou une faille pour l attaquer et prendre l avantage. Pour apprendre fais toujours la même ouverture simple des débutants et joueur moyen je sors pion devant roi et dame avec les cavaliers qui protègent et les fous qui a s adaptent avec l adversaire aussi
*Jobijoba00000*: Va faire le plus vite possible le petit rock
*Jobijoba00000*: Essaie de relier les deux tours comme grosse défense
*Jobijoba00000*: Attend un peu que le jeu soit moins saturé pour utiliser ta dame en attaque aussi
*Jobijoba00000*: La dame étant la pièce la plus forte tu peux vite te retrouver à faire que la protéger
*Jobijoba00000*: Ne faire q défendre les coups de l adversaire n est pas bon
*Jobijoba00000*: Essaie de privilégier les coups qui imposent des mouvements a l adversaire
*Jobijoba00000*: Sur la dernière partie tu exploses en bougeant des pièces qui apportent pas grand chose dans l immédiat puisque bloquer par pion et autre
*Jobijoba00000*: Et quand tu sens que si t attaques même si t y laisses des soldats ton adversaire il laissera plus de bille que toi c est bien aussi
*Jobijoba00000*: Dernier point si le roi de ton adversaire est pas protégé essaie de l’utiliser comme point de pression
*Jobijoba00000*: Et le plus important qd ton adversaire bouge q est il en train de prévoir.
```

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
