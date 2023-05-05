---
title: "Ostéopathie en ligne: que nous apprennent les habitudes de recherche?"
date: 2020-10-31T09:26:21Z
draft: false
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
- klemen-sever

toc: true

---

Récemment, un ami ostéopathe a ouvert un nouveau cabinet. Pour l'aider à
développer son activité, nous avons mené une enquête sur les habitudes des
patients, leurs recherches en ligne et les périodes d'affluence.

Notre but initial était d'analyser les statistiques de recherches fournies
par Google pour confirmer nos observations en cabinet. Suite à cette
première analyse, nous nous sommes interrogés sur les potentielles
périodicités des douleurs et motifs de consultation.

<!--more-->

## Du choix des bons mots-clés et des bons intervalles
Notre principal outil d'investigation fut
[Google Trends](https://trends.google.fr/trends/?geo=FR), un outil gratuit
permettant d'avoir un aperçu des tendances de recherche sur le célèbre
moteur de recherche.

S'il n'y a pas de lien direct établi entre les volumes de recherche et le
nombre de prises de rendez-vous en cabinet, ces dernières peuvent néanmoins nous
révéler certaines habitudes.

En comparant divers mots-clés et leurs variantes pour les termes «&nbsp;ostéopathe&nbsp;»,
«&nbsp;kinésithérapeute&nbsp;» et «&nbsp;médecin&nbsp;», nous avons choisi de
conserver les trois mots-clés suivants pour notre analyse:
«&nbsp;ostéopathe&nbsp;», «&nbsp;kiné&nbsp;» et «&nbsp;medecin&nbsp;» (sans accent) [^1].

[^1]: Les variantes (avec ou sans accent, mot complet ou abrégé) avaient un volume
      de recherche moins représentatif. Si vous souhaitez essayer par vous-même,
      pensez à comparer les mots voulus et leurs variantes pour avoir un
      échantillon aussi représentatif que possible.

Notre analyse s’est portée sur plusieurs périodes, de la plus précise à la plus générale : *par semaine, par trimestre puis tous les 5
et 9 ans*. Ainsi, suivant la période étudiée, des tendances différentes se
dessinent, nous renseignant sur les habitudes des patients.

Afin de rendre cet article plus clair, nous avons choisi de l’accompagner de
nombreux graphiques. Ceux-ci sont **interactifs**, pensez donc à glisser
votre curseur (ou votre doigt le cas échéant) dessus pour avoir le détail des valeurs.

> Une mise en garde cependant, dans Google Trends, **les valeurs obtenues sont
> toujours normalisées entre 0 et 100 et jamais fournies en valeurs absolues**.
> Toutes les valeurs sont donc mises à l’échelle entre ces deux valeurs. Par exemple,
> s’il y a 2000 recherches sur un mot-clé le lundi et 500 le mardi, ces valeurs
> deviendront respectivement 100 et 25 dans les valeurs Google Trends.

## C’est au réveil que la plupart des patients contactent leur ostéopathe
Notre première observation a porté sur les habitudes hebdomadaires de recherche
pour les ostéopathes et kinésithérapeutes. Nous avons groupé les deux
graphiques, car les courbes sont très similaires et possèdent des volumes de
recherche proches. Les courbes des médecins sont à part, car leur volume de recherche
est bien supérieur et empêcherait de bien étudier le cas des ostéopathes
et kinésithérapeutes.

<div id="linechart-7d-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les
mots « ostéopathe » et « kiné » sur 7 jours</div>

Comme on peut le remarquer sur le graphique ci-dessus, chaque jour **le pic de
recherches se situe le matin aux alentours de 9 h** (sauf le dimanche). Le second pic
quotidien se situe aux alentours de 15 h environ. Cela correspond à ce que chacun
d’entre nous a pu constater en cabinet. Les valeurs données par l’outil
*Trends* peuvent donc nous informer sur les habitudes de nos patients.

Nous avons également observé les volumes de recherche des médecins sur la même période
(7 jours).

<div id="linechart-7d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le
mot « medecin » sur 7 jours</div>

Ici aussi, les comportements de recherche sont similaires même si le pic matinal
a lieu une heure plus tôt, aux alentours de 8 h. Toutefois, il existe une **spécificité sur
la courbe des médecins** : un autre pic, certes plus léger, aux alentours de 4 h du matin.

---

Pour visualiser cela plus facilement, nous avons groupé les recherches par
heures de la journée sur une semaine :

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
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots « ostéopathe » et « kiné » en fonction des heures (sur 7 jours)</div>

Que ce soit sur le graphique des ostéopathes, des kinés ou des médecins, la majorité
des recherches ont donc bien lieu entre 8 h et 10 h du matin. Comme nous le verrons plus loin,
la prévalence des douleurs le matin au réveil est en effet un phénomène connu.

<div id="barchart-7d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot « medecin » en fonction des heures (sur 7 jours)</div>

## La majorité des rendez-vous sont pris le lundi
Il semblerait que le lundi soit la journée avec le plus gros volume de recherches.
Pour confirmer cette tendance, nous avons voulu vérifier avec les données sur 90
jours (environ 13 semaines).

<div id="linechart-90d-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots « ostéopathe » et « kiné » sur 90 jours</div>

Nous pouvons voir que les pics se répètent pratiquement tous les lundis.
Les week-ends, en revanche, restent les jours les plus calmes. Il en va de même pour les médecins :

<div id="linechart-90d-med"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot « medecin » sur 90 jours</div>

---

Nous avons de nouveau groupé les recherches par jour de la semaine sur 12 semaines (84 jours)
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
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots « ostéopathe » et « kiné » en fonction des jours (sur 84 jours)</div>

Le lundi arrive bien en tête des jours avec le plus de recherche concernant les thérapeutes manuels.
Les volumes des jours suivants, quant à eux, sont à peu près constants avant de diminuer le vendredi et
d’être au minimum le week-end.

## Les ostéopathes ont leurs meilleurs mois en 2e partie d’année
Après les habitudes horaires et hebdomadaires, nous avons choisi des périodes plus longues
pour observer les variations au fil des mois.

<div id="linechart-5y-phys"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots « ostéopathe » et « kiné » sur 5 ans (2015-2020)</div>

Nous pouvons voir que **sur 5 ans, la popularité de l’ostéopathie a pratiquement doublé**.
S’il y avait 100 recherches par jour fin 2015, il y en a eu 200 en juillet 2020.

Plusieurs facteurs peuvent expliquer cette augmentation :
- une croissance de l’utilisation d’outils numériques par la patientèle (prise de rendez-vous en ligne, recherche de renseignements ...)
- un engouement progressif pour l’ostéopathie auprès des bénéficiaires
- une [augmentation du nombre d'ostéopathes]({{< ref "/dossiers/demographie/OP-D5FRWL-1_osteopathes" >}}) et de contextes dans lesquels l’ostéopathie est pratiquée (cadre professionnel, sportif, etc.)

On remarque aussi le *gouffre créé par l’épidémie COVID-19 dans les mois de mars et avril 2020* toutes
recherches confondues. Ces mois seront ignorés dans la suite de cette étude afin d’obtenir une plus
grande cohérence des données.

Sur la courbe des ostéopathes, on peut voir se dessiner une diminution importante des recherches
tous les 6 mois environ, en mai/juin et en décembre/janvier. En outre, on note **une inversion
des courbes en août et septembre** entre ostéopathes et kinés.

Regroupons les données par mois sur 9 ans (en excluant la période COVID-19), du 01/01/2010 au 31/12/2019.

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
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour les mots « ostéopathe » et « kiné » en fonction des mois sur 9 ans (01/01/2010 au 31/12/2019)</div>

La principale variation se situe pendant les mois d’été, et plus particulièrement en août :
c’est pendant ce mois-ci que sont effectuées **le plus de recherches pour les ostéopathes**
alors que c’est **le moins recherché pour les kinésithérapeutes**. Les mois les
plus actifs chez les ostéopathes sont sur la deuxième moitié de l’année,
d’août à novembre. Les médecins, quant à eux, ont leur propre rythme, le
maximum des recherches étant en septembre et le minimum en mai.

<div id="barchart-10y-med-nocovid"></div>
<div class="font-bold text-center underline text-md">Volume relatif de recherches pour le mot « medecin » sur 9 ans (01/01/2010 au 31/12/2019)</div>

## Des habitudes de recherche aux études observationnelles
Jusqu’à présent, les analyses que nous avons pu faire
n’ont fait que confirmer nos intuitions quant à la
fréquentation de nos cabinets.

Toutefois, ces observations nous ont amenés à nous interroger sur la
périodicité des douleurs et de motifs de consultation :

 - Les douleurs (ou autres motifs) sont-elles *plus fréquentes le lundi* ?
 - Les douleurs sont-elles *plus fortes le matin*, au réveil ?
 - Ou alors les douleurs apparaissant au réveil *motivent-elles plus de prises de rendez-vous* ?
 - L’augmentation de la fréquentation en août est-elle due aux *vacances des autres professionnel·le·s* ?
 - Ou bien les vacances sont-elles à l’origine de *plus d’accidents* ?
 - Ou bien encore, *la chaleur des mois d’été* aurait-elle un effet dans l’augmentation des douleurs ?

Pour répondre à ces questions, nous avons interrogé [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
ainsi que le moteur de recherche [Google Scholar](https://scholar.google.fr/).
Les mots-clés les plus utiles pour trouver des études en lien avec nos observations
ont été «& nbsp;temporal pattern&nbsp;», «& nbsp;seasonal&nbsp;» et «& nbsp;increased incidence&nbsp;».

Nous avons pu trouver des études au sujet des observations suivantes :

 - **Pratiquement un tiers (30%) des congés maladie sont posés le lundi** d’après
   l’analyse des données d’entreprises privées [^2]
 - Les **douleurs de dos surviennent le plus souvent le matin entre 7 h et 10 h**
   pour 35.2% des personnes d’une étude sur le sujet [^3]
 - D’autres semblent indiquer que **les douleurs de dos apparaissent
   le plus souvent le week-end**[^4]
 - Quelques études traitent de l’**augmentation des accidents de l’appareil locomoteur
   durant les mois d’été et des vacances**[^5]
 - Certaines études notent une **augmentation des douleurs de l’appareil musculosquelettique
   en fonction des saisons,** mais elles ne sont pas concordantes [^6]
 - Des études observent que **les troubles cardio-vasculaires**
   (<abbr title="Accident Vasculaire Cérébral">AVC</abbr>s,
   infarctus du myocarde) sont **plus fréquents le lundi**[^7] même si des études
   récentes semblent réfuter cette conclusion [^8]

[^2]: - Mercer · Marsh (2014) [Baromètre prévoyance](https://www.mercer.fr/content/dam/mercer/attachments/europe/France/2014_11_BPM_VF.pdf)
      - BBC (2009) [Monday 'most common for sickness'](http://news.bbc.co.uk/2/hi/health/8347332.stm)

[^3]: - Moldofsky H. Sleep and pain, Sleep Medicine Reviews, Volume 5, Issue 5, 2001, Pages 385-396, ISSN 1087-0792, https://doi.org/10.1053/smrv.2001.0179.
      - Steffens D, Ferreira ML, Latimer J, et al. What triggers an episode of acute low back pain? A case-crossover study. Arthritis Care Res (Hoboken). 2015 Mar;67(3):403–10. https://doi.org/10.1002/acr.22533
[^4]: - Lovegrove MT, Jelinek GA, Gibson NP, Jacobs IG. Analysis of 22,655 presentations with back pain to Perth emergency departments over five years. Int J Emerg Med. 2011;4:59. Published 2011 Sep 17. https://doi.org/10.1186/1865-1380-4-59

[^5]: - Telfer S, Woodburn J. Let me Google that for you: a time series analysis of seasonality in internet search trends for terms related to foot and ankle pain. J Foot Ankle Res 8, 27 (2015). https://doi.org/10.1186/s13047-015-0074-9
      - Jespersen E, Holst R, Franz C, et al. Seasonal variation in musculoskeletal extremity injuries in school children aged 6–12 followed prospectively over 2.5 years: a cohort studyBMJ Open 2014;4:e004165. https://doi.org/10.1136/bmjopen-2013-004165

[^6]: - Abeler K, Sand T, Friborg O & Bergvik S. Seasonality in pain, sleep and mental distress in patients with chronic musculoskeletal pain at latitude 69° N, Chronobiology International (2020), https://doi.org/10.1080/07420528.2020.1764011
      - Inaba R., Mirbod SM. Subjective Musculoskeletal Symptoms in Winter and Summer among Indoor Working Construction Electricians, Industrial Health, 2010, Volume 48, Issue 1, Pages 29-37, Released February 16, 2010, Online ISSN 1880-8026, Print ISSN 0019-8366, https://doi.org/10.2486/indhealth.48.29
      - Piedrahı́ta H, Punnett L, Shahnavaz H. Musculoskeletal symptoms in cold exposed and non-cold exposed workers. International Journal of Industrial Ergonomics. 2004. 34. 271-278. https://doi.org/10.1016/j.ergon.2004.04.008.

[^7]: - Witte D, Grobbee D, Bots M et al. A Meta-analysis of excess cardiac mortality on Monday. Eur J Epidemiol 20, 401–406 (2005). https://doi.org/10.1007/s10654-004-8783-6
      - Barnett AG, Dobson AJ, Excess in cardiovascular events on Mondays: a meta-analysis and prospective studyJournal of Epidemiology & Community Health 2005;59:109-114. https://doi.org/10.1136/jech.2003.019489
      - Robert W. Peters, Steve McQuillan, Susan Kaye Resnick, and Michael R. Gold. Increased Monday Incidence of Life-Threatening Ventricular Arrhythmias. Circulation. 1996;94:1346–1349 https://doi.org/10.1161/01.CIR.94.6.1346
      - Turin T, C, Kita Y, Murakami Y, Rumana N, Sugihara H, Morita Y, Hirose K, Okayama A, Nakamura Y, Ueshima H: Increase of Stroke Incidence after Weekend Regardless of Traditional Risk Factors: Takashima Stroke Registry, Japan; 1988–2003. Cerebrovasc Dis 2007;24:328-337. https://doi.org/10.1159/000106978
      - Arntz HR, Müller-Nordhorn J MD, Willich S N MD, Cold Monday mornings prove dangerous: epidemiology of sudden cardiac death. Current Opinion in Critical Care: June 2001 - Volume 7 - Issue 3 - p 139-144
      - Folyovich A, Béres-Molnár K A, Gimesi-Országh J, Katona L, Biczó D, Vörös K, Gőbl G, Ajtay A, Bereczki D. Is stroke indeed a "Monday morning disease"? Ideggyogy Sz. 2018 May 30;71(5-06):161-168. English. doi: 10.18071/isz.71.0161. PMID: 29889458. https://doi.org/10.18071/isz.71.0161
      - Witte D, Grobbee D, Bots M, Hoes A. Excess cardiac mortality on Monday: The importance of gender, age and hospitalisation. European journal of epidemiology. 2005. 20. 395-9. https://doi.org/10.1007/s10654-004-6594-4
      - Jakovljević D. Day of the Week and Ischemic Stroke – Is It Monday High or Sunday Low? Stroke. 2004;35:2089–2093 https://doi.org/10.1161/01.STR.0000137763.88044.28
      - Willich S N, Löwel H, Lewis M, Hörmann A, Arntz H R, Keil U. Weekly variation of acute myocardial infarction. Increased Monday risk in the working population. Circulation. 1994;90:87–93 https://doi.org/10.1161/01.CIR.90.1.87

[^8]: - Baldwin HJ, Marashi-Pour S, Chen HY, Kaldor J, Sutherland K, Levesque JF. Is the weekend effect really ubiquitous? A retrospective clinical cohort analysis of 30-day mortality by day of week and time of day using linked population data from New South Wales, Australia. BMJ Open. 2018 Apr 12;8(4):e016943. https://doi.org/10.1136/bmjopen-2017-016943 . Erratum in: BMJ Open. 2018 May 14;8(5):e016943corr1. PMID: 29654003; PMCID: PMC5898331.
      - Saposnik G, Baibergenova A, Bayer N, Hachinski V. Weekends: A Dangerous Time for Having a Stroke?Stroke. 2007;38:1211–1215 https://doi.org/10.1161/01.STR.0000259622.78616.ea

On peut donc voir qu’il y a des similitudes entre ces observations très
générales sur les recherches de la population française et des effets périodiques
(hebdomadaires, annuels) plus subtils en ce qui concerne les douleurs et autres motifs
de consultation.

## Une heureuse découverte
Si notre but initial était d’extraire des informations sur les périodes
les plus propices au développement d’un cabinet d’ostéopathie, nous avons
découvert des informations bien plus intéressantes sur la périodicité
de certains symptômes. Il faut toutefois garder à l’esprit que ces
corrélations n’ont pas encore été l’objet d’études approfondies
permettant de confirmer et d’expliquer ces phénomènes.

Ces résultats portent sur toute la population française et sont donc
très globaux. Il est intéressant de constater que les phénomènes hebdomadaires
sont plus prononcés et, de fait, mieux étudiés que les phénomènes saisonniers ou annuels.
Nous n’avons fait qu’effleurer les possibilités d’analyses que peut nous offrir cet outil.
À l’avenir, il serait en effet possible d’observer de nouvelles tendances encore
inconnues, par exemple en utilisant des termes liés à une pathologie spécifique.

<style>
  .chart {
    font : 10px sans-serif;
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
{{< importjs "d3" >}}
{{< js "script.js" >}}
