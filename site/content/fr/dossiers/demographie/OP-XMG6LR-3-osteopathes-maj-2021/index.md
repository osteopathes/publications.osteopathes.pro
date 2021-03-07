---
title: 'Mise à jour 2021 – Démographie des ostéopathes'
date: 2021-03-06T19:00:00Z
lastmod: 2021-03-06T19:00:00Z
draft: true
slug: demographie-osteopathes-en-2021
resources:
  - name: cover-image
    src: paysage-polygones.jpg

publication_id: OP-XMG6LR-3
aliases:
  - /ref/OP-XMG6LR-3

auteurs:
  - konrad-florkow
  - klemen-sever

toc: true

---

Comme chaque année depuis 2018, lorsqu'arrive la nouvelle année, nous nous attelons
à l'étude de la démographie des ostéopathes français.

Nous nous efforçons continuellement d'améliorer la qualité et la pertinence de nos données pour
nous situer au plus près de la réalité. Pour 2021, nous avons eu la joie de pouvoir
accéder au registre <abbr title="Automatisation DEs LIstes">ADELI</abbr> ce qui nous a
permis un croisement de données plus méticuleux que jamais.

Nous commençons par dévoiler les principaux chiffres avant de continuer par nos
observations et quelques analyses.

<!--more-->

> Si vous préférez les cartes, vous pouvez directement explorer la
> [démographie des ostéopathes en 2021 sur la carte interactive](https://www.osteopathes.pro/fr/cartographie
).

## Les principaux chiffres de la démographie des ostéopathes en 2021
Sans plus attendre, voici les chiffres que nous avons obtenus. Si certains
peuvent surprendre, ils nous semblent refléter de près la réalité comme
nous en parlons plus loin dans cet article.

 - Sur les 33&nbsp;695 ostéopathes du registre
   <abbr title="Automatisation DEs LIstes">ADELI</abbr>, nous avons réussi à
   retrouver la trace de 25&nbsp;919 professionel·le·s présent·e·s sur internet.
 - Au total, cela se traduit par plus de 29&nbsp;513 cabinets situés
   sur le territoire ce qui représente environ 14% de praticien·ne·s
   avec plus d'un cabinet.
 - Nous retrouvons 44% de femmes sur la population totale. La dernière
   étude démographique du ROF mentionne une croissance de 6% des femmes
   par an, ce qui permet d'envisager une parité hommes-femmes
   pour fin 2021 ou 2022. [^1]
 - Près de 53% (13&nbsp;679) des ostéopathes recensés utilise une solution de
   prise de rendez-vous en ligne.

[^1]: [Démographie 2021 par le ROF](https://www.osteopathie.org/client/document/demographierofjanvier2021_527.pdf)

## Comment ces données ont-elles été obtenues ?
Cette année, contrairement aux années précédentes, nous avons pu avoir accès au registre
<abbr title="Automatisation DEs LIstes">ADELI</abbr>. Ce fut donc notre point de départ
pour rechercher tous les praticien·ne·s sur le territoire. Cela est une différence
majeure par rapport aux années précédentes où le parcours du Web était notre source
principale.

La première étape fut donc de parcourir le fichier
<abbr title="Automatisation DEs LIstes">ADELI</abbr> et, pour chaque ostéopathe
présent, d'effectuer une recherche sur Internet pour le ou la retrouver. Cette
recherche s'effectue avec plusieurs méthodes:
 - via le numéro <abbr title="Automatisation DEs LIstes">ADELI</abbr>
 - via le nom et prénom exacts
 - via le nom et prénom approximatifs: si un seul résultat correspond sur toute la France,
   nous considérons que c'est la même personne. S'il y a plusieurs résultats, le résultat
   est ignoré car nous ne pouvons identifier lequel correspond.

Pour chacun de ces résultats de recherche obtenus, nous ne gardons que les résultats
comportant le mot clé "ostéopathe", toutes écritures confondues: sans accents, avec majuscules,
raccourci, avec coquilles (osthéopathe).

Enfin, pour chacune des pages résultant de ce parcours, nous rechercons l'existence
d'un ou de plusieurs cabinets et de son adresse physique associée. L'adresse est
ensuite géocodée, c'est à dire convertie en coordonées
<abbr title="Global Positioning System">GPS</abbr> pour pouvoir être localisé sur
la carte et faire des comptages par zone géographique choisie.

Pour résumer notre processus:
 1. Lire le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
 2. Pour chaque ligne, rechercher l'ostéopathe sur Internet avec diverses
    méthodes de la plus précise à la moins précise.
 3. Pour chaque thérapeute trouvé, rattacher un ou plusieurs cabinets avec
    son adresse physique
 4. Géolocaliser chaque adresse obtenue
 5. Effectuer les comptages des ostéopathes rattachés à leur cabinet
    dans la zone géographique choisie

## Pourquoi une telle différence entre vos chiffres et le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr> ?
Pour pouvoir répondre à cette question, il y a plusieurs facteurs à avoir en tête,
tant du côté du registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
que de notre scan du Web.

### Registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
Tout d'abord, concernant le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>,
et comme rappelé par la
<abbr title="Direction de la Recherche, des Études, de l'Évaluation et des Statistiques">DRESS</abbr> dans son rapport 2014[^2],
> [...] le répertoire Adeli présente des fragilités qui justifient que l’on considère avec précaution les statistiques présentées ici. Tout d’abord, les professionnels ne sont pas réellement incités à se désinscrire du répertoire (l’inscription étant gratuite) lorsqu’ils cessent leur(s) activité(s) temporairement ou définitivement. Par ailleurs, les professionnels ne signalent pas systématiquement les changements de situations professionnels (mode d’exercice, département d’exercice par exemple). Enfin, certains professionnels (c’est notamment le cas pour les infirmiers) semblent tarder à faire enregistrer leur diplôme au répertoire. Ainsi, le répertoire Adeli sous estime potentiellement les jeunes professionnels en activité et sur représente les plus âgés.

[^2]: [Rapport sur l'exploitation des sources <abbr title="Automatisation DEs LIstes">ADELI</abbr> et <abbr title="Répertoire Partagé des Professionnels de Santé">RPPS</abbr> de la <abbr title="Direction de la Recherche, des Études, de l'Évaluation et des Statistiques">DRESS</abbr>](https://drees.solidarites-sante.gouv.fr/sites/default/files/2021-01/les_professions_de_sante_au_1er_janvier_-_sources.pdf)

Par ailleurs, il faut également prendre en compte que:
- le répertoire <abbr title="Automatisation DEs LIstes">ADELI</abbr> mis à disposition
  publiquement est très succint (numéro, civilité, nom, prénom),
- nous avons dé-dupliqué les numéros <abbr title="Automatisation DEs LIstes">ADELI</abbr>,
  ce qui diminue le nombre de professionnels de 35&nbsp;174 à 34&nbsp;385,
- seule une adresse professionnelle est prise en compte, ce qui ne permet pas de localiser
  les zones d'exercice des praticien·ne·s ayant plus d'un cabinet,
- certain·e·s ostéopathes conservent leur numéro
  <abbr title="Automatisation DEs LIstes">ADELI</abbr> pour exercer en tant que formateur·trice·s
  sans pour autant pratiquer en cabinet.

### Données du Web
Concernant la mise en correspondance des données du Web et celles du registre
<abbr title="Automatisation DEs LIstes">ADELI</abbr>,
là encore il existe quelques biais, qui, même si nous avons tenté de les réduire au
maximum, sont présents. Citons donc:
- les praticien·ne·s ayant changé de nom (par ex.: mariage)
- les coquilles dans le registre et sur Internet (par ex: Michael/Mickael/Micael/...)
- les multiples homonymes exacts que nous comptons à 690 personnes
- les praticien·ne·s non présent·e·s sur Internet
- une latence variable de quelques semaines à plusieurs mois entre le moment où
  un·e praticien·ne s'installe et sa présence en ligne

Il n'est donc pas étonnant que nous ayons 7&nbsp;776 ostéopathes *manquant·e·s* après
croisement des données. Néanmoins, nous pensons que cela nous permet de nous rapprocher
plus près de la réalité qu'avec le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
seul ou avec les données issues du Web seules (comme ce fut le cas pour 2019 et 2020).

## Ces résultats diffèrent de l'année précédente, pouvez-nous nous en dire plus ?
Étant donné que notre méthode cette année diffère de celle des années précédentes,
ce comparatif n'a que peu de valeur. Les données obtenues en 2021 en partant du
registre <abbr title="Automatisation DEs LIstes">ADELI</abbr> nous semblent
plus fiables que celles de 2019 ou 2020 où nous n'avions pas de liste de référence.

Si l'on s'en réfère au registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
la croissance est de 3.60%, passant de 33&nbsp;188 en 2020 à 34&nbsp;385 en 2021
(1197 en valeur absolue).

En 2020 nous avions recensés 25&nbsp;120 ostéopathes. En 2021 nous en recensons 25&nbsp;919
ce qui représente une différence de 799 ostéopathes. Cela représente donc une croissance de
3,18%.

## Discussion

### Ratio habitants par ostéopathe
En 2021, la population estimée de la France est de 67&nbsp;422&nbsp;000 habitants[^3],
ce qui donne un ratio moyen de 2601 habitants par ostéopathe. Pourtant, ce ratio moyen
ne permet pas de precevoir la pression démographique présente dans la réalité.

[^3]: [Bilan démographie 2020 de l'<abbr title="Institut National de la Statistique et des Études Économiques">INSEE</abbr>](https://www.insee.fr/fr/statistiques/5012724)

La cartographie traduit cela mieux graphiquement en soulignant les zones où le
ratio habitants par ostéopathe avoisine les 560, ce qui est trois fois moins
que la capacité de charge démographique estimée par l'URCO en 2018[^4] à 1672 hab/ostéopathe.
Si l'URCO estimait en 2018 que *« 51% de la population ostéopathique ressent une pression démographique et 33% de la population doit vivre dans des espaces où la limite maximale de densité professionnelle atteint un seuil critique. »*, il est fort probable que la situation
se soit dégradée depuis lors.

[^4]: [Étude du métier d'ostéopathe en 2018](http://www.lejournal.osteopathie-recherche.fr/index.php/statistiques-sondages/emost-2018-etude-du-metier-d-osteopathe-en-2018/17-4-marche-du-travail-et-projection-d-effectifs)

### Biais de l'étude
Comme toute étude et malgré nos efforts, quelques biais subsistent.

Dans le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>,
certaines entrées sont doubles, c'est à dire
plusieurs entrées pour un même numéro
<abbr title="Automatisation DEs LIstes">ADELI</abbr>. Un premier filtre que
nous avons appliqué fut de dédoublonner les numéros
<abbr title="Automatisation DEs LIstes">ADELI</abbr> faisant
passer le registre de 35&nbsp;174 à 34&nbsp;385 ostéopathes.

D'autre part, étant donné que nous procédons par une recherche en ligne
des praticien·ne·s avec leur nom et prénom, les homonymes exacts
(même nom et prénom) sont difficiles à comptabiliser correctement. Nous
estimons leur nombre à 690, potentiellement manquants dans notre
démographie finale.

Par ailleurs, il nous est impossible de retrouver les ostéopathes
faisant de structures opaques et ne publiant pas les coordonnées
de leurs membres en ligne, comme par exemple certains centres ostéopathiques.

### Améliorations potentielles
Nous réfléchissons à répertorier d'autres professionnels du soin ou
de la santé tels que les kinésithérapeutes ou chiropracteurs sur la carte
pour donner une meilleure visibilité interprofessionnelle.

Par ailleurs, il sera bientôt possible aux ostéopathes de s'inscrire
sur le site pour renseigner vous-même votre cabinet qui sera prise en
compte pour la prochaine démographie.

## Questions fréquentes
### Pourquoi je ne figure pas sur la carte de la démographie ?
Comme expliqué dans la question sur les différences entre le registre
<abbr title="Automatisation DEs LIstes">ADELI</abbr> et nos chiffres,
il existe de nombreux facteurs pouvant causer ce résultat:
- vous avez changé de nom ou de prénom
- vous utilisez un nom partiel sur internet par rapport à votre nom complet dans le registre
- il y a une coquille dans le registre <abbr title="Automatisation DEs LIstes">ADELI</abbr>
  ou sur Internet
- vous n'êtes pas présent·e sur le web
- votre cabinet est dans un centre de type urgence ostéopathe sans aucune autre
  visibilité sur Internet
- votre travail principal n'est pas ostéopathe et vous apparaissez sous d'autres critères sur internet
- votre adresse n'est pas géolocalisable avec les outils que nous utilisons,
  nous n'arrivons donc pas à vous placer sur la carte

Si vous souhaitez renseigner votre cabinet, pensez à suivre nos actualités
pour pouvoir rajouter vous-même le cabinet dans notre base de donnée.
Celui-ci sera pris en compte pour la prochaine édition.

### Une zone semble vide sur la carte, est-ce une bonne idée ?
Peut être. Gardez à l'esprit que notre carte n'indique qu'un seul
critère potentiel de réussite qu'est le ratio habitants par ostéopathes.

D'autre part, et malgré nos meilleurs efforts, il est possible que nous ayons
omis quelques ostéopathes dans la zone que vous consultez.
Re-vérifiez toujours nos informations avec d'autres sources
comme des annuaires ou d'autres cartes.

Nous vous recommandons de faire une étude de marché et de viabilité avant
d'installer votre cabinet.

## Conclusion




Fichier brut: 35174
ADELI unique: 34385
Chiffre de départ 33695 => manque 690 ?

33 188 -> 35 174 = 5.98% augmentation (1986)
33 188 -> 34385 = 3.60% augmentation (1197)



-> remarque que nous avons retrouvé 10k kinés, ceux qui sont le plus sensibles
   à la pression démographiques sont les ostéopathes issus de formations initiales
   et non les professionnels de santé qui peuvent toujours pratiquer en tant que
   professionnels de santé si la pression est trop forte



Sachant qu'il y a environ
10 400 kinésithérapeutes-ostéopathes et environ 1 700 médecins-ostéopathes,
la différence de 9 000 praticiens observée semble cohérente.

D'autre part, s'il est vrai que chaque ostéopathe doit s'enregistrer
dans le registre ADELI, cela ne garantit pas sa validité pour estimer
le nombre d'ostéopathes rééllement en exercice sur le territoire. En
effet, le registre ADELI souffre de quelques défauts majeurs:


- Nous avons exclu les professionnels ne présentant pas l'ostéopathie
  comme titre principal, dont les kinés-ostéopathes (10 392), médecins (1632),
