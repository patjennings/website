---
title: Robot batteur
layout: article
author: Thomas
tags: arduino musique electronique
excerpt_separator: <!--more-->
---
* table of contents
{:toc}

Ce robobatteur est une première ébauche de dispositif mécanique permettant de produire un rythme en frappant des éléments de batterie. Le cas d'usage est celui d'un ou de plusieurs musiciens ayant les mains prises, mais désirant tout de même être accompagnés par une section rythmique acoustique.

![Robobatteur image](/assets/images/robotbatteur_5632.jpg)

## Dispositif ##
Ce robobatteur produit un ryhtme simple : Poum Tchac. Premier temps, la grosse caisse, deuxième temps, la caisse claire. Le tempo peut être contrôlé  grâce à un potentiomètre.
Le principal général du dispositif est de pouvoir disposer deux baguettes, qui frappent chacune un élément de batterie disposé à la verticale.

![Robobatteur image](/assets/images/robotbatteur_5624.jpg)

Le robobatteur est constitué d'un volume en bois (du tasseau en pin), qui supporte les deux servomoteurs, la carte Arduino Uno et la planche de branchements. Sur chaque servomoteur, une baguette est fixée grâce à du scotch légèrement élastique, qui sert d'habitude pour les travaux électriques : l'élasticité permet de ne pas trop forcer sur le servomoteur lors de la frappe.

![Robobatteur image](/assets/images/robotbatteur_5629.jpg)

La carte Arduino est reliée à l'ordinateur, qui lui fournit l'énergie (en plus de compiler et de pousser le script au démarrage). L'idéal est de pouvoir remplacer cette source d'énergie par une alimentation externe (que je n'ai pas à disposition pour le moment).

> Je n'ai pu tester qu'avec un tom basse en guise de grosse caisse. D'ailleurs, c'est une baguette qui frappe sur celui-ci, au lieu d'une batte, qui produirait sûrement un son plus satisfaisant.

![Robobatteur image](/assets/images/robotbatteur_5630.jpg)

Le dispositif est monté sur un pied photo, sur lequel il est maintenu, grâce à son pied pris dans un *clamp*. Le pied photo est idéal : en dehors du fait qu'on peut monter et descendre le robobatteur, il est également possible de le faire tourner sur lui-même, ce qui est très pratique quand il s'agit de disposer finement celui-ci au dessus des éléments de batterie.

![Robobatteur image](/assets/images/robotbatteur_5628.jpg)

En ce qui concerne le placement des baguettes par rapport aux peaux de frappes : l'idéal est de placer la peau à environ 70-80% de la course de la baguette. Dans le script actuel, la course est relativement courte, mais permet d'avoir la puissance nécessaire pour avoir un son assez puissant avec ce placement.

## Circuit ##
Les deux servomoteurs sont alimentés par la carte, et sont reliés aux sorties 6 et 7 de celle-ci. Le potentiomètre, qui agit sur le script, est relié à l'entrée A0 de la carte. Un condensateur de 100µF est disposé en amont.

![Robobatteur circuit de base](/assets/images/robotbatteur-circuit-1.png)

## Code ##
``` java
#include <Servo.h> // la librairie qui sert à communiquer avec les servomoteurs

Servo myservo1, myservo2;  // on crée les deux servos
int const potPin = A0; // le potard
int potVal; // la valeur récupérée du potard
int tempoDelay; // la valeur qui sera controlée par le potard

void setup()
{
  Serial.begin(9600);

  myservo1.attach(6, 500, 1000);
  myservo1.write(0);
  myservo2.attach(7, 500, 2000);
  myservo2.write(0);
}

void loop() {
  potVal = analogRead(potPin);
  tempoDelay = map(potVal, 0, 1023, 700, 150);

  // caisse claire
  myservo1.write(20); // la baguette s'abaisse
  delay(60);
  myservo1.write(0);  // la baguette se relève
  delay(tempoDelay);

  // kick
  myservo2.write(0);  // la baguette s'abaisse
  delay(60);
  myservo2.write(20); // la baguette se relève
  delay(tempoDelay);
}
```
## Problèmes et évolutions ##

#### Redémarrage intempestif de la carte ####

Les servomoteurs consomment par moments trop d'énergie. En tout cas, trop pour la carte qui n'est pas en mesure de la lui fournir. C'est ce qui conduit celle-ci a redémarrer de façon intempestive pendant son fonctionnement. Le circuit ci-dessous, dans lequel les servomoteurs sont alimentés par une source externe, doit permettre de résoudre ce problème.

![Robobatteur circuit - évolution](/assets/images/robotbatteur-circuit-2.png)

[Source](https://www.carnetdumaker.net/articles/controler-un-servomoteur-avec-une-carte-arduino-genuino)  

#### Tempo rapide ####

Au délà d'un certain tempo, la conception présentée ici a des limites. Le servomoteur qui contrôle la baguette n'a pas le temps de revenir en place avant la nouvelle frappe, ce qui conduit à un résultat parfaitement brouillon, ni attendu, ni musical.

L'idée serait sûrement de pouvoir ajouter deux servomoteurs en plus. Deux baguettes se relairaient alors pour frapper alternativement chaque élément, dans les cas où le tempo est trop rapide. Cela nécessite quelques ajustements dans le code.

Mais comme il est fort probable que ce soit moi qui ne parvienne pas à contrôler correctement les servomoteurs. La solution ne nécessite peut-être pas de revoir le dispositif entièrement, mais de mieux contrôler la course des servomoteurs avec le code.

#### Contrôle midi ####

Une fois résolus les problèmes de redémarrage intempestif et de frappes rapprochées, il serait très intéressant de pouvoir contrôler le robobatteur grâce à un signal MIDI.

Dnas l'idée : un séquenceur, sur lequel est programmé une séquence de batterie, envoie ses messages MIDI à la carte Arduino via un pin 5 broches. La carte retranscrit ces messages en frappes de batteries grâce aux servomoteurs. Il y aura toujours un problème physique à un moment, qui ne pourra pas nous permettre de retranscrire des triples croches à un tempo de 240 : mais gérer des doubles croches jusqu'à 200-210 bpm parait atteignable.


#### Démarrer, arrêter ####
Pour l'instant, le robot démarre dès qu'on branche la carte. Pas optimal au niveau de la mise en scène. On devrait donc également pouvoir démarrer et arrêter le robot à la demande, sûrement via un switch au pied.
