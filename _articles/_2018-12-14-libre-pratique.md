---
layout: article
title:  Design et outillage libre (2), aspects pratiques 
date:  2018-12-07 08:48:00 +0200
categories: article
cover: 
excerpt_separator: <!--more-->
---
Sur la reproduction des réflexes à l'intérieur des softs.

Note préalable à une série d'articles portant sur le passage à un outillage libre dans le cadre d'une pratique de designer. D'abord, un mot sur mon utilisation de la machine. Bien sûr, j'utilise depuis le début la suite Adobe pour effectuer tout un tas d'opérations graphiques. Vectoriel dans Illustrator, Bitmap dans Photoshop, Mise en page dans InDesign, animation dans After Effects. Pour des opérations 3d, j'ai recours à Cinema4D. J'utilise également des outils de dessin de polices, surtout dans le but de créer des polices d'icones. Fontlab, puis Glyphs. Dans le champ du design UI, qui m'occupe depuis quelques années, le set initial (adobe) auquel on forme dans toutes les écoles d'arts appliquées s'est vu remis en question par des combos application desktop + services en ligne. Sketch, Framer, Zeplin, InVision. Google Docs, également, est abondemment utilisé pour le partage de fichiers. Une nuée de petits utilitaires viennent compléter cet environnement, j'en cite quelques-uns : Automator pour automatiser des tâches laborieuses (copies de fichiers, traitement d'images en masse, etc.)effectuer des opérations diverses et répétitives (recadrer un paquet d'images, NameMangler pour renommer des lots de fichiers, Ember pour stocker des photos, Handbrake pour compresser des vidéos. Skype pour communiquer. Transmit comme client FTP, Writer pour écrire, Reeder pour consulter les flux rss

Bien sûr, il y également la suite Office. Word qui est toujours massivement utilisé chez les clients, et qu'on utilise parfois, surtout lorsqu'il faut créer un document avec des non-designers. Powerpoint, *of course* (combien d'informations sont à aller chercher dans des fichiers ppt). Excel ,bien sûr. Plannings, budgets, souvent disponibles ainsi.

Je cite également des outils de son, même si ce ne sont pas des outils que j'utilise dans un cadre professionnel. Ableton Live (comme séquenceur, pour l'édition MIDI,  et pour l'enregistrement et le mixage), j'utilise également les synthétiseurs, Guitar Rig pour la virualisation d'amplis guitares. Reason, pour quelques autres synthétiseurs, également. Je cite ces outils, car ils sont pour une bonne partie dans ma remise en cause de l'outillage.

Côté développement, le problème est différent. J'ai utilisé plusieurs éditeurs de texte (Coda, Atom), propriétaires ou non. Mais le problème du format de sortie est moindre : ce ne sont _que_des éditeurs de texte, et ne sont donc pas liés à un format précis. Mais le passage à Linux m'a également fait reconsidérer cette question, qui recoupe d'autres questionnements sur l'interface. J'en parlerai ailleurs
Là, les outils sont _open source_ dans leur immense majorité. HTML/CSS/Js complète La pile AMP (Apache, MySQL, PHP)
L'idée est de

Passons en  revue les outils utilisés jusqu'à présent, et voyons comment procéder sous un environnement Linux.

## Les formats ##
L'enjeu de trouver une format qui colle à chaque chose. Voir plus bas, Adobe + Office, ok. Le reste, autre méthode.
Carolina de Bartolo. Extension is amputation. Question is : is the extension worth the aputation ?

Zeplin, InVision, Sketch, veulent par nature être hégémoniques.

### Formats d'édition/travail
- .psd
- .ai
- .sketch
- .framer
- .ae
- .pde
- .raw
- .C4d
- .als (Live)

### Formats de lecture/ échange
- .pdf
- .jpg
- .gif
- .png
- .md
- .txt
- .svg
- .html
- .css
- .js
- .xml
- .aiff
- .wav




## Suite Adobe ##
Pour ces outils, comme pour ceux de la suite Office, la *traduction* libre de ces softwares existe depuis longtemps. Le combo du designer graphique Illustrator+Photoshop+InDesign a son pendant dans le combo Inkscape+Gimp+Scribus.

#### Inkscape ####
Remplacer Sketch. InVision > Subfolio. Ou Beaker browser.

#### Gimp ####
utilise.
Principe des sélections flottantes.
Pas d'effets dynamiques. Donc, duplications.
Moins fluide d'une manière générale, que Photoshop.

#### Scribus ####
Honnêtement, je ne passe pas beaucoup de temps sur les softs de mise en page print. Scribus semble faire le boulot, en tout cas. Gestion des styles, références dynamiques, gestion de table des matières, gestion des couleurs

exception after effects
Natron


#### Glyphs ####
FontForge. Doc assez complète. Utilisation de Python.

#### Blender ####
facile, beaucoup de ressources en ligne. Vidéo de andrewBidule.

#### InDesign ####
ça peut être XPress.
On peut passer sur Scribus. Très proche de InDesign.
Ou html2print. Intérêt pour designer. Apprendre HTML/CSS. Outil dans le navigateur.
C'est là où on peut le plus reconfigurer sa pratique hors des softs-mastodontes. 

Suite Office

#### Emacs ####
Je suis passé sur emacs, dont j'ai longtemps entendu parler sans avoir la curiosité d'aller plus loin.Mais cela a recoupé des questionnements sur le rôle du texte dans l'interface, surtout sur le fait que ce texte est, bien sûr, une interface en soi. Emacs, et des outils satellites (org, helm) étire au maximum cette possibilité du texte, et offre à l'utilisateur u ; on revient à ce qu'est fondamentalement une interface. (quelques captures de )
L'intérêt est surtout qu'on lit peu ou prou la même chose, que l'on consulte ses mails, qu'on code, qu'on consulte son agenda, qu'on parcourt ses flux rss, qu'on écrive, qu'on pousse des fichiers sur git) - comparaison visuel hétérogène OSX, homogène emacs
le buffer. Ce buffer peut-être en lecture ou en écriture. En lecture, le texte peut être agencé dans l'espace, et pas seulement déposé en lignes. C'est le cas sur org-mode. En écriture, c'est donc un éditeur
