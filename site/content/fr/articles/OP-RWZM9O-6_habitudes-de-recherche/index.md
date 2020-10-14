---
title: "Ostéopathie en ligne: que nous apprennent les habitudes de recherche ?"
date: 2020-10-10T09:26:21Z
draft: true
slug: osteopathie-en-ligne-que-nous-apprennent-les-habitudes-de-recherche

resources:
- name: cover-image
  src: recherche-en-ligne-osteopathe.jpg
- name: script.js
  src: script.js

publication_id: OP-RWZM9O-6

aliases:
- /ref/OP-RWZM9O-6

auteurs:
- konrad-florkow

---

Récemment, un ami ostéopathe a ouvert un nouveau cabinet. Pour l'aider à
développer son activité, nous avons mené une enquête sur les habitudes des
patients, leurs recherches en ligne et les périodes d'affluence.

Voici les principales observations et analyses que nous avons retenues.

<!--more-->

## Du choix des bons mots clés et des bons intervalles

Notre principal outil d'investigation fut
[Google Trends](https://trends.google.fr/trends/?geo=FR), un outil gratuit
permettant d'avoir un aperçu des tendances des recherches sur le célèbre
moteur de recherche.

S'il n'y a pas de lien direct établi entre les tendances de recherche et le
nombre de prises de rendez-vous en cabinet, ces dernières peuvent néanmoins nous
révéler certaines habitudes.

En comparant divers mots clés et leurs variantes parmi «&nbsp;ostéopathe&nbsp;»,
«&nbsp;kinésithérapeute&nbsp;» et «&nbsp;médecin&nbsp;», nous avons choisi de
conserver les trois termes suivants pour notre analyse: «&nbsp;ostéopathe&nbsp;»,
«&nbsp;kiné&nbsp;» et «&nbsp;medecin&nbsp;» (sans accent).
Les variantes (avec ou sans accent, mot complet ou abrévié) avaient un volume
de recherche moins représentatif. Si vous souhaitez essayer par vous mêmes
en utilisant le lien ci-dessus, pensez donc à comparer les mots voulus et leurs
variantes pour avoir un échantillon aussi représentatif que possible.

Notre analyse s'est portée sur plusieurs périodes de temps: *par semaine,
par mois, par trimestre, par an et enfin tous les 5 et 10 ans*. Ainsi,
suivant la période étudiée, des motifs différents se dessinent sur les
habitudes des patients.

Les données présentées dans cet article ont été enregistrées sur la dernière
semaine du mois de juillet 2020.

Pour rendre cet article plus agréable, il est accompagné de nombreux graphiques.
Ceux-ci sont **interactifs, pensez donc à glisser votre curseur (ou votre doigt
le cas échéant) dessus pour avoir le détail** des valeurs.

> Une mise en garde cependant, dans Google Trends, **les valeurs obtenues sont
> toujours normalisées entre 0 et 100 et jamais en valeurs absolues**. Toutes les
> valeurs sont donc mises à l'échelle entre ces deux valeurs. par exemple,
> s'il y a 2000 recherches sur un mot clé le lundi et 500 le mardi, ces valeurs
> deviendront respectivement 100 et 25 dans les valeurs Google Trends.

## Premières observations

To be continued...




### Quels sont les horaires les plus recherchés ?


<div id="linechart-7d-phys"></div>

Sur ce graphique, on peut voir les données sur 7 jours avec le mot clé "osteopathe". On remarque tout de suite
différents pics qui se répètent tout au long de la semaine. Ces pics de recherches se situent à 9h, chaque jour de la
semaine sauf le dimanche. Juste après le pic, il y a une diminution progressive avec la présence d'un second pic de 13h
à
16h. Nous pouvons aussi noter que la valeur la plus basse se situe vers 1h-2h du matin.
Le pic le plus fort est le lundi. Cela reste stable pendant les 3 jours suivant pour baisser à partir de vendredi.

On s'est demandé si c'est la même chose pour les professions de santé. On a rajouté les mots clés "kiné" et "medecin".

<div id="linechart-7d-med"></div>

On remarque le même schéma avec des pics situés aux mêmes crénaux horaires. On peut noter toutefois la présence d'un
second pic plus marqué pour les médecins et kinés à 14h avec une baisse sur les coups de midi.
Petites particularités, les médecins sont recherchés le dimanche et semblent également plus recherchés à 4h du matin.

Pour être certains que nos yeux ne nous jouent pas des tours, on a rassemblé toutes les valeurs en fonction des heures
pour obtenir les heures où les mots clés sont les plus recherchés.

<div class="justify-center mb-2">
<div x-data="{ on: false }" role="checkbox" tabindex="0" @click="on = !on; $dispatch('barchart-7d-phys-click', {value: on})" @keydown.space.prevent="on = !on" :aria-checked="on.toString()" aria-checked="true" :class="{ 'bg-gray-200': !on, 'bg-indigo-600': on }" class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-indigo-600 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline">
    <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-5 bg-white rounded-full shadow">
      <span :class="{ 'opacity-0 ease-out duration-100': on, 'opacity-100 ease-in duration-200': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0">
        <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span :class="{ 'opacity-100 ease-in duration-200': on, 'opacity-0 ease-out duration-100': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100">
        <svg class="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
        </svg>
      </span>
    </span>
  </div>
  <div class="inline-flex self-center"> empiler </div>
</div>
<div id="barchart-7d-phys"></div>

On peut confirmer la présence d'une hausse des recherches, tous thérapeutes confondus, entre 8h et 10h.

### Quels sont les jours les plus recherchés ?

Sur les graphiques précédents, on peut voir que le lundi est le jour où le pic est le plus important. Regardons les
données sur 90 jours pour voir si cela se confirme.

<div id="linechart-90d-phys"></div>

On peut voir que les pics de recherches se situent essentiellement de lundi en concurrence avec le mardi et le mercredi.
Le samedi et le dimanche restent les jours les moins recherchés.

Est-ce valable pour les autres professions ?

<div id="linechart-90d-med"></div>

C'est encore plus vrai pour les médecins et les kinés où le lundi semble être en tête. La tendance semble être la même
pour les autres professions allant jusqu'à suivre les changements des jours. Si la recherche augmente le mardi par
exemple, cette augmentation est parfois visible dans les autres professions également.

Voyons si les données regroupées donne le même résultat.

<div id="barchart-90d-all" style="height:500px"></div>

Le lundi se confirme en tête des jours où les requêtes sont les plus importantes pour nos mots clés. Jusqu'en milieu de
semaines les recherches restent importantes pour diminuer à partir de jeudi.

### Quels sont les mois les plus recherchés ?

On va maintenant prendre des périodes plus larges pour observer la popularité au fil des mois.

<div id="linechart-5y-phys"></div>

Dès que l'on regarde ce graphique, on remarque tout de suite le gouffre qu'a laissé le COVID19 au mois de Mars-Avril et
ce toutes professions confondues. Nous allons faire abstraction de mars et avril 2020 pour la suite.

Pour les médecins, les pics se situent plutôt dans les alentours de décembre, janvier, février et septembre.
Pour les kinés, on remarquera surtout les pics inférieurs où les recherches les plus basses se situent en août et en
décembre.

Zoomons un peu plus sur nous, les médecins ont beaucoup trop de recherches et agrandissent le graphique. Profitons en
aussi
pour prendre une période hors covid, de janvier 2015 à janvier 2020.

<div id="linechart-5y-med" style="height:500px"></div>

Nos pics de recherches si situent plus en août-septembre et février-mars. Les pics inférieurs se situent plutôt en
décembre et en mai-juin.

Regardons les données en les rassemblants par mois.

<div id="barchart-5y-osteo-nocovid" style="height:500px"></div>

Ici les mois de juillet à septembre semblent s'en sortir le mieux. On remarque que mars semble également sortir du lot
en
début d'année.
Prenons une période de 10 ans pour lisser les données.

<div id="barchart-10y-osteo-nocovid" style="height:500px"></div>

On remarque que août prend les devants avec le mois de septembre et octobre. Le mois de janvier suit de près en début
d'année.

Voyons ce qu'il se passe chez les médecins et kinésithérapeutes sur une période de 10 ans.

<div id="barchart-10y-all-nocovid" style="height:500px"></div>

Chez les médecins, on voit clairement un mois de janvier prédominant. On voit aussi une hausse autour de la période de
la rentrée scolaire au mois de septembre. Le mois de mai est celui qui dispose du moins de recherches.

## Discussion

- pk 8-9h et pk en début de semaine ?
-> ouverture des cabinets le matin, impossibilité de contacter plus tard dans la journée, avoir un rdv rapidement,
-> le blues du lundi ? conséquence du week-end ?

- que peut on dire que la prévalence du mois d'aout.
-> les vacances sont propices aux blessures/douleurs ? Préparation/bilan pour la rentrée ? Les médecins plus en
septembre pr certificat/vaccins ?

- medecins inverses de l'osteo ? gros pic en décembre, plus faible en aout..
- Les ponts, chute de la recherche ? Les fêtes et ponts crée des trous dans les graphes toute profession confondues sauf
pr le smédecins en fin d'année.

> Conseil pour les jeunes installant, être disponible de 8h à 10h du lundi au mercredi.Etre présent en aout.

On peut tout d'abord s'intéresser à la question des horaires. Pourquoi cherche-t-on essentiellement des thérapeutes
entre 8h et 9h.


## Pour résumer

Pour notre profession, il semblerait que nos patients nous recherchent le plus vers 8-9h, en début de semaine, autour de
la rentrée et en début d'année. Pour les médecins, les périodes sont sensiblement similaires même si les courbes semblent plus marquées. On notera toutefois quelques différence comme le mois de décembre, qui est un mois assez recherché pour les médecins, surtout auour de la période de Noël.

Pour les jeunes ostéopathes, on ne peut que vous conseiller :
- d'etre disponible de 8h à 10h
- d'éviter de partir en vacances au mois d'août/septembre.


<!-- <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> -->
<script data-require="d3@3.5.3" data-semver="3.5.3" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.js"></script>


<style>
    .chart {
      font: 10px sans-serif;
    }
    
    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }
    
    .x.axis path {
      display: none;
    }
    
    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 1.5px;
    }
  </style>
{{< js "script.js" >}}
