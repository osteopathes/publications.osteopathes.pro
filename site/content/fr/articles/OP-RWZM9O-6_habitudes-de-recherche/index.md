---
title: "Ostéopathie en ligne: que nous apprennent les habitudes de recherche ?"
date: 2020-10-24T09:26:21Z
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

toc: true

---

Récemment, un ami ostéopathe a ouvert un nouveau cabinet. Pour l'aider à
développer son activité, nous avons mené une enquête sur les habitudes des
patients, leurs recherches en ligne et les périodes d'affluence.

Si les observations initales réalisées grâce aux recherches sur Google sont
assez évidentes, elles nous ont pourtant fait découvrir des chronologies
particulières des douleurs et des motifs de consultation.

<!--more-->

## Du choix des bons mots clés et des bons intervalles
Notre principal outil d'investigation fut
[Google Trends](https://trends.google.fr/trends/?geo=FR), un outil gratuit
permettant d'avoir un aperçu des tendances des recherches sur le célèbre
moteur de recherche.

S'il n'y a pas de lien direct établi entre les volumes de recherche et le
nombre de prises de rendez-vous en cabinet, ces dernières peuvent néanmoins nous
révéler certaines habitudes.

En comparant divers mots clés et leurs variantes parmi «&nbsp;ostéopathe&nbsp;»,
«&nbsp;kinésithérapeute&nbsp;» et «&nbsp;médecin&nbsp;», nous avons choisi de
conserver les trois termes suivants pour notre analyse: «&nbsp;ostéopathe&nbsp;»,
«&nbsp;kiné&nbsp;» et «&nbsp;medecin&nbsp;» (sans accent)[^1].

[^1]: Les variantes (avec ou sans accent, mot complet ou abrévié) avaient un volume
      de recherche moins représentatif. Si vous souhaitez essayer par vous mêmes,
      pensez donc à comparer les mots voulus et leurs variantes pour avoir un
      échantillon aussi représentatif que possible.

Notre analyse s'est portée sur plusieurs périodes de temps, du plus précis
au plus général: *par semaine, par trimestre puis tous les 5
et 9 ans*. Ainsi, suivant la période étudiée, des motifs différents se
dessinent sur les habitudes des patients.

Pour rendre cet article plus agréable, il est accompagné de nombreux graphiques.
Ceux-ci sont **interactifs**, pensez donc à glisser votre curseur (ou votre doigt
le cas échéant) dessus pour avoir le détail des valeurs.

> Une mise en garde cependant, dans Google Trends, **les valeurs obtenues sont
> toujours normalisées entre 0 et 100 et jamais fournies en valeurs absolues**.
> Toutes les valeurs sont donc mises à l'échelle entre ces deux valeurs. Par exemple,
> s'il y a 2000 recherches sur un mot clé le lundi et 500 le mardi, ces valeurs
> deviendront respectivement 100 et 25 dans les valeurs Google Trends.

## C'est au réveil que la plupart des patients contactent leur ostéopathe
Notre première observation a porté sur les habitudes hebdomadaires de recherche
pour les ostéopathes et kinésithérapeutes. Nous avons groupé les deux
graphiques car les courbes sont très similaires et avec des volumes de
recherche proches. Les médecins sont à part car leur volume de recherche
est bien supérieur et empêcherait de bien étudier le cas des ostéopathes
et kinésithérapeutes.

<div id="linechart-7d-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les
mots "ostéopathe" et "kiné" sur 7 jours</div>

Comme on peut le remarquer sur le graphique ci-dessus, chaque jour **le pic de
recherches se situe le matin aux alentours de 9h** (sauf le dimanche). Le second pic
quotidien se situe aux alentours de 15h environ. Cela correspond à ce que chacun
d'entre nous a pu constater en cabinet. Les valeurs données par l'outil
*Trends* peuvent donc nous informer sur les usages de nos patients.

Nous avons également observé les volumes de recherche des médecins sur la même période de
7 jours.

<div id="linechart-7d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le
mot "medecin" sur 7 jours</div>

Ici aussi, les comportements de recherche sont similaires même si le pic matinal
est une heure plus tôt, aux alentours de 8h. On remarque une **spécificité des
médecins**: on observe un autre pic, certes plus léger, aux alentours de 4h du matin.

---

Pour visualiser cela plus facilement, nous avons groupé les recherches par
heures de la journée sur une semaine:

<div class="justify-center mb-2">
<div x-data="{ on: false }" role="checkbox" tabindex="0" @click="on = !on; $dispatch('barchart-7d-phys-click', {value: on})" @keydown.space.prevent="on = !on" :aria-checked="on.toString()" aria-checked="true" :class="{ 'bg-gray-200': !on, 'bg-teal-600': on }" class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-teal-600 border-2 border-teal-600 rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline">
    <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-5 bg-white rounded-full shadow">
      <span :class="{ 'opacity-0 ease-out duration-100': on, 'opacity-100 ease-in duration-200': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0">
        <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span :class="{ 'opacity-100 ease-in duration-200': on, 'opacity-0 ease-out duration-100': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100">
        <svg class="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 12 12">
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
        </svg>
      </span>
    </span>
  </div>
  <div class="inline-flex ml-2 font-semibold">Empiler les courbes</div>
</div>
<div id="barchart-7d-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots "ostéopathe" et "kiné" en fonction des heures (sur 7 jours)</div>

Que ce soit sur le graphique des ostéopathes, des kinés ou des médecins, la majorité
des recherches se situe donc bien entre 8h et 10h du matin. Comme nous le verrons plus loin,
la prévalence des douleurs le matin au réveil est un phénomène connu.

<div id="barchart-7d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot "medecin" en fonction des heures(sur 7 jours)</div>

## La majorité des rendez-vous sont pris le lundi
Il semblerait que le lundi soit la journée avec le plus gros volume de recherches.
Pour confirmer cette tendance, nous avons voulu vérifier avec les données sur 90
jours (environ 13 semaines).

<div id="linechart-90d-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots "ostéopathe" et "kiné" sur 90 jours</div>

Au premier coup d'œil, nous voyons que les pics se répètent pratiquement tous les lundis.
Les week-ends restent les jours les plus calmes. Il en va de même pour les médecins:

<div id="linechart-90d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot "medecin" sur 90 jours</div>

---

Ici aussi, nous avons groupé les recherches par jour de la semaine sur 12 semaine (84 jours)
pour confirmer nos observations.

<div class="justify-center mb-2">
  <div x-data="{ on: false }" role="checkbox" tabindex="0" @click="on = !on; $dispatch('barchart-90d-phys-click', {value: on})" @keydown.space.prevent="on = !on" :aria-checked="on.toString()" aria-checked="true" :class="{ 'bg-gray-200': !on, 'bg-teal-600': on }" class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-teal-600 border-2 border-teal-500 rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline">
      <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-5 bg-white rounded-full shadow">
        <span :class="{ 'opacity-0 ease-out duration-100': on, 'opacity-100 ease-in duration-200': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0">
          <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span :class="{ 'opacity-100 ease-in duration-200': on, 'opacity-0 ease-out duration-100': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100">
          <svg class="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
          </svg>
        </span>
      </span>
    </div>
  <div class="inline-flex ml-2 font-semibold">Empiler les courbes</div>
</div>
<div id="barchart-90d-phys" ></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots "ostéopathe" et "kiné" en fonction des jours (sur 84 jours)</div>

Le lundi arrive bien en tête des jours avec le plus de recherche de thérapeutes manuels.
Les jours suivants sont à peu près constants avant de diminuer le vendredi et d'être au minimum
le week-end.

## Les ostéopathes ont leurs meilleurs mois en 2ème partie d'année
Après les habitudes horaires et hebdomadaires, nous avons pris des périodes plus larges
encore pour observer les variations au fil des mois.

<div id="linechart-5y-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots "ostéopathe" et "kiné" sur 5 ans (2015-2020)</div>

Nous voyons que **sur 5 ans, la popularité de l'ostéopathie a pratiquement doublé**. S'il y avait 100
recherches par jour fin 2015, il y en a eu 200 en juillet 2020.

Plusieurs facteurs peuvent expliquer cette augmentation:
- une croissance de l'utilisation d'outils numériques par les patients (prise de rendez-vous en ligne, recherche de renseignements, ...)
- progression de l'engouement pour l'ostéopathie auprès des patients
- augmentation du nombre de praticiens et de cadres dans lesquels l'ostéopathie est pratiquée (cadre professionnel, sportif, etc.)

On remarque aussi le *gouffre créé par l'épidémie COVID-10 dans les premiers mois de Mars-Avril 2020* toutes
professions manuelles confondues. Ces mois ont été supprimés de la suite de l'étude pour assurer une plus
grande cohérence des données obtenues.

Sur la courbe des ostéopathes, il existe des diminutions importantes dess recherches
tous les 6 mois environ, en mai-juin et en décembre-janvier. On voit bien également la différence
des courbes en août et septembre entre ostéopathes et kinés.

Regroupons les données par mois sur 9 ans (en excluant la période COVID-19), du 01/01/2010 au 31/12/2019.

<div class="justify-center mb-2">
  <div x-data="{ on: false }" role="checkbox" tabindex="0" @click="on = !on; $dispatch('barchart-10y-phys-nocovid-click', {value: on})" @keydown.space.prevent="on = !on" :aria-checked="on.toString()" aria-checked="true" :class="{ 'bg-gray-200': !on, 'bg-teal-600': on }" class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-teal-600 border-2 border-teal-500 rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline">
      <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-5 bg-white rounded-full shadow">
        <span :class="{ 'opacity-0 ease-out duration-100': on, 'opacity-100 ease-in duration-200': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0">
          <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span :class="{ 'opacity-100 ease-in duration-200': on, 'opacity-0 ease-out duration-100': !on }" class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100">
          <svg class="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
          </svg>
        </span>
      </span>
    </div>
  <div class="inline-flex ml-2 font-semibold"> Empiler les courbes </div>
</div>
<div id="barchart-10y-phys-nocovid"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots "ostéopathe" et "kiné" en fonction des mois sur 9 ans (01/01/2010 au 31/12/2019)</div>

La principale différence se situe dans les mois d'été, et plus particulièrement en août: c'est le mois
le **plus recherché pour les ostéopathes** alors que c'est le **moins recherché pour les kinésithérapeutes**. Les
mois les plus actifs chez les ostéopathes sont sur la deuxième moitié de l'anné, d'août à novembre.
Les médecins, eux, ont leur propre rythme, le maximum étant en septembre et le minimum en mai.

<div id="barchart-10y-med-nocovid"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot "medecin" sur 9 ans (01/01/2010 au 31/12/2019)</div>

## Des habitudes de recherche aux études observationnelles
Ceux et celles avec quelques années d'expérience en cabinet l'auront remarqué, la plupart des
observations que nous avons pu faire jusqu'à présent n'ont rien d'étonnant.

Pourtant, ces habitudes de recherche nous ont amené à creuser plus loin dans la chronologie
des douleurs et de motifs de consultation:

 - les douleurs (ou autre motifs) sont elles *plus fréquentes le lundi* ?
 - les douleurs sont elles *plus fortes le matin*, au réveil ?
 - ou alors les douleurs apparaissant au réveil *motivent plus de prises de rendez-vous* ?
 - l'augmentation de la fréquentation en août est-elle dûe aux *vacances des autres professionnels* ?
 - ou bien les vacances sont-elles à l'origine de *plus d'accidents* ?
 - ou bien encore, *la chaleur des mois d'été* aurait-elle un effet dans l'augmentation des douleurs ?

Pour répondre à ces questions, nous avons interrogé [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
ainsi que le moteur de recherche [Google Scholar](https://scholar.google.fr/).
Les mots clés les plus utiles pour trouver des études en lien avec nos observations
sont «&nbsp;temporal pattern&nbsp;», «&nbsp;seasonal&nbsp;» et «&nbsp;increased incidence&nbsp;».

Nous avons pu trouver des études au sujet des observations suivantes:

 - une **majorité de congés maladie sont posés le lundi** d'après l'analyse des données
   d'entreprises privées par Mercer, dont une analyse des causes potentielles[^2]
 - les **douleurs de dos matinales sont fréquentes** (ou souvent aggravées le matin au réveil)[^3]
 - de nombreuses études semblent étayer le fait que **les troubles
   cardio-vasculaires** (<abbr title="Accident Vasculaire Cérébral">AVC</abbr>s,
   infarctus du myocarde) sont **plus fréquents le lundi**[^4]
 - quelques études traitent de l'**augmentation des accidents de l'appareil locomoteur
   durant les mois d'été et des vacances**[^5]
 - certaines études voient une **augmentation des douleurs de l'appareil musculosquelettique
   en fonction des saisons** mais elles ne sont pas toutes concordantes[^6]

[^2]: - Mercer · Marsh (2014) [Baromètre prévoyance](https://www.mercer.fr/content/dam/mercer/attachments/europe/France/2014_11_BPM_VF.pdf)
      - BBC (2009) [Monday 'most common for sickness'](http://news.bbc.co.uk/2/hi/health/8347332.stm)

[^3]: - Harvey Moldofsky, Sleep and pain, Sleep Medicine Reviews, Volume 5, Issue 5, 2001, Pages 385-396, ISSN 1087-0792, https://doi.org/10.1053/smrv.2001.0179.
      - Steffens D, Ferreira ML, Latimer J, et al. What triggers an episode of acute low back pain? A case-crossover study. Arthritis Care Res (Hoboken). 2015 Mar;67(3):403–10. https://doi.org/10.1002/acr.22533

[^4]: - Witte, D., Grobbee, D., Bots, M. et al. A Meta-analysis of excess cardiac mortality on Monday. Eur J Epidemiol 20, 401–406 (2005). https://doi.org/10.1007/s10654-004-8783-6
      - Robert W. Peters, Steve McQuillan, Susan Kaye Resnick, and Michael R. Gold. Increased Monday Incidence of Life-Threatening Ventricular Arrhythmias. Circulation. 1996;94:1346–1349 https://doi.org/10.1161/01.CIR.94.6.1346
      - Turin T, C, Kita Y, Murakami Y, Rumana N, Sugihara H, Morita Y, Hirose K, Okayama A, Nakamura Y, Ueshima H: Increase of Stroke Incidence after Weekend Regardless of Traditional Risk Factors: Takashima Stroke Registry, Japan; 1988–2003. Cerebrovasc Dis 2007;24:328-337. https://doi.org/10.1159/000106978
      - Arntz, Hans-Richard; Müller-Nordhorn, Jaqueline MD; Willich, Stefan N. MD Cold Monday mornings prove dangerous: epidemiology of sudden cardiac death. Current Opinion in Critical Care: June 2001 - Volume 7 - Issue 3 - p 139-144
      - Witte, Daniel & Grobbee, Diederick & Bots, Michiel & Hoes, Arno. (2005). Excess cardiac mortality on Monday: The importance of gender, age and hospitalisation. European journal of epidemiology. 20. 395-9. https://doi.org/10.1007/s10654-004-6594-4
      - Jakovljević D. Day of the Week and Ischemic Stroke – Is It Monday High or Sunday Low? Stroke. 2004;35:2089–2093 https://doi.org/10.1161/01.STR.0000137763.88044.28
      - S N Willich, H Löwel, M Lewis, A Hörmann, H R Arntz, and U Keil. Weekly variation of acute myocardial infarction. Increased Monday risk in the working population. Circulation. 1994;90:87–93 https://doi.org/10.1161/01.CIR.90.1.87

[^5]: - Telfer, S., Woodburn, J. Let me Google that for you: a time series analysis of seasonality in internet search trends for terms related to foot and ankle pain. J Foot Ankle Res 8, 27 (2015). https://doi.org/10.1186/s13047-015-0074-9
      - Jespersen E, Holst R, Franz C, et al Seasonal variation in musculoskeletal extremity injuries in school children aged 6–12 followed prospectively over 2.5 years: a cohort studyBMJ Open 2014;4:e004165. https://doi.org/10.1136/bmjopen-2013-004165

[^6]: - Karin Abeler, Trond Sand, Oddgeir Friborg & Svein Bergvik (2020) Seasonality in pain, sleep and mental distress in patients with chronic musculoskeletal pain at latitude 69° N, Chronobiology International, https://doi.org/10.1080/07420528.2020.1764011
      - Ryoichi INABA, Seyed Mohammad MIRBOD, Subjective Musculoskeletal Symptoms in Winter and Summer among Indoor Working Construction Electricians, Industrial Health, 2010, Volume 48, Issue 1, Pages 29-37, Released February 16, 2010, Online ISSN 1880-8026, Print ISSN 0019-8366, https://doi.org/10.2486/indhealth.48.29
      - Piedrahı́ta, Hugo & Punnett, Laura & Shahnavaz, Houshang. (2004). Musculoskeletal symptoms in cold exposed and non-cold exposed workers. International Journal of Industrial Ergonomics. 34. 271-278. https://doi.org/10.1016/j.ergon.2004.04.008.

On peut donc voir qu'il y a une certaine corrélation entre les observations très
générales sur les recherches de la population française et des effets périodiques
(hebdomadaires, annuels) plus subtils au niveau des douleurs et autres motifs
de consultation.

## Une découverte heureuse
Si notre but initial était d'extraire des informations sur les périodes
les plus propices au développement d'un cabinet d'ostéopathie, nous avons
découvert des informations bien plus intéressantes sur la périodicité
des symptômes. Certains phénomènes sont confirmés par des études d'envergure et
peuvent donc venir étoffer notre pratique clinique.

Ces résultats portent sur toute la population française et sont donc
très globaux. Il est intéressant de constater que les phénomènes hebdomadaires
sont plus visibles et mieux étudiés que les phénomènes saisonniers ou annuels.
Nous n'avons fait qu'effleurer les observations possibles avec cet outil.
À l'avenir, il serait en effet possible d'observer de nouvelles tendances encore
inconnues, par exemple en utilisant des termes liés à une pathologie spécifique.

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="https://d3js.org/d3-scale.v3.min.js"></script>
<script src="https://d3js.org/d3-time.v2.min.js"></script>
<script src="https://d3js.org/d3-time-format.v3.min.js"></script>
<script src="https://d3js.org/d3-color.v2.min.js"></script>
<script src="https://d3js.org/d3-collection.v1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/d3-selection@2"></script>
<script src="https://d3js.org/d3-transition.v2.min.js"></script>

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
