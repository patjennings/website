---
layout: article
title: Une contribution 
date:  2019-04-04 08:48:00 +0200
categories: article
cover: 
excerpt_separator: <!--more-->
---

L'histoire d'une contribution en 2019.<!--more-->

``` python
import random

# mon idee de contribution
contribution = {"contenu": "mon idée", "interet_suppose": 2}

# l'idée que je me fais du débat en cours
debat = {"contenu": "beaucoup de choses", "interet_suppose": 3} 

if debat["interet_suppose"] != 0:
    contribution["interet_suppose"]-=1

if contribution["interet_suppose"] <= debat["interet_suppose"]:
    print("Pas de contribution au débat")
    debat["interet_suppose"]+=1
    contribution["interet_suppose"]-=1
else:
    debat_avant = str(debat["contenu"])
    debat_maintenant = debat_avant+" & "+str(contribution["contenu"])
    debat.update(contenu = debat_maintenant)
    nouvel_interet = random.randrange(5)
    debat.update(interet_suppose = nouvel_interet)
    
print(debat)
```
