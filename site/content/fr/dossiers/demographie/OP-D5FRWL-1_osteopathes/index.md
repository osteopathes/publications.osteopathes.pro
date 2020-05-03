---
title: 'Démographie des ostéopathes'
date: 2020-04-18T09:00:00Z
draft: false
slug: demographie-osteopathes
resources:
  - name: cover-image
    src: courbes-bleues.jpg

publication_id: OP-D5FRWL-1
aliases:
  - /ref/OP-D5FRWL-1

auteurs:
  - klemen-sever
  - konrad-florkow

---

En 2019 nous avons commencé à publier une démographie des ostéopathes
en France d'après le web.
Dès la première année, nous avons reçu un nombre croissant de visites et nous
avons décidé de poursuivre en publiant les données démographiques actualisées
chaque année.

Ce dossier contient l'historique et les analyses des données
démographiques au fil des ans.

<!--more-->

## Comment recenser tous les ostéopathes ?
Cette question s'est rapidement posée lorsque nous avons entrepris ce projet.
Le plus simple aurait était de récupérer les données ADELI mais après de multiples
tentatives infructueuses et des discussion avec d'autres confrères,
nous avons découvert que le répertoire n'est pas exact non plus.

> **Note**: Le répertoire ADELI est le répertoire dans lequel doivent s'enregistrer
tous les ostéopathes souhaitant exercer.

En attendant de pouvoir récupérer les données du registre ADELI, nous avons pris
le parti d'utiliser les données publiques d'Internet pour faire une estimation
la plus réaliste possible des ostéopathes en France.

## Extraction et nettoyage des données du Web
Pour ce faire, nous avons parcouru les pages web contenant les coordonnées
publiques des ostéopathes et nous avons recensé leur adresse que nous avons
converties en coordonnées GPS.

Ce premier jeu de donnée (ou *dataset* en anglais) était un bon point de départ.
Il nous a fallu cependant nettoyer les données de plusieurs façons:

 - supprimer au maximum les doublons pour éviter les double-comptages
 - exclure les ostéopathes non-exclusifs en croisant avec la base publique
   des professionnels de santé et s'ils acceptaient la carte vitale

## Rendre les données utilisables par tous
Ce premier dataset étant obtenu, il a fallu les rendre visibles et utilisables
par n'importe qui. Le format choisi fut une carte interactive qui permettait à
chacun de cliquer et de consulter facilement le jeu de données.

La première donnée que nous avons croisée avec la démographie ostépathique
fut la population de chaque commune pour donner une idée de la densité des
ostéopathes par rapport aux habitants (sous le ratio habitants par ostéopathe).

Après quelques tests, nous avons remarqué qu'il manquait une information
essentielle: la zone d'effet autour de chaque commune.
Ce qu'on entend par là, c'est que chaque ostéopathe attire des patients
jusqu'à plusieurs kilomètres autour de son cabinet.
Ainsi représenter seulement le comptage par commune ne suffit pas pour avoir une
bonne visiblité des zones de vide entre praticiens. C'est pourquoi vous
trouverez qu'il est possible d'activer une zone d'effet de 5km, 10km, 15km ou
20km au niveau des communes pour avoir une visualisation plus précise.

## Première mise en ligne et retours
Cette première version fut mise en ligne le 18 mars 2019 et fut publiquement
diffusée à partir du 4 avril 2019.

De nombreuses personnes nous ont fait des retours que nous avons souhaité
améliorer pour 2020:

 - sur mobile, la plupart des utilisateurs avaient du mal à utiliser la carte
   car elle s'adaptait mal à l'écran
 - la vue des communes était limitée par le département et ne permettait pas
   de se faire une image plus globale de la France
 - nous n'avions pas pu intégrer les DOM/TOM dans la première version
 - enfin, notre base de donnée n'avait pas une structure très pratique pour
   pouvoir importer de nouvelles années.

Tous ces problèmes ont été corrigés avec la nouvelle cartographie publiée le
7 avril 2020 après plus de 9 mois de travail. Bien entendu, nous en avons
également profité pour inclure la démographie des ostéopathes pour l'année 2020.

## Et maintenant ?

Pour les prochaines années, nous pourrons ajouter assez facilement de nouvelles
données annuelles et de nouvelles sources. Bien entendu, n'hésitez pas à nous
contacter et à vos faire vos retours pour que la cartographie s'améliore.

> Analyses annuelles
>  - [Démographie des ostéopathes 2020]({{< ref "/dossiers/demographie/OP-HG1A50-4_osteopathes-maj-2020" >}})
