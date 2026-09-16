# Descriptions et résumés des publications

Les 37 publications des sections Articles, Actualités et Dossiers disposent d’une
description explicite. Une section « À retenir » les accompagne lorsque le contenu
se prête à des explications ou résultats utiles à retenir.

- **Introduction (`.Summary`)** : les cartes de l’accueil et des listes reprennent
  les premiers paragraphes de l’article, avec la voix et la mise en forme de l’auteur.
- **Description** : les métadonnées SEO, sociales et structurées utilisent une
  accroche propre à chaque article, qui nomme le sujet et donne une raison de lire.
- **À retenir (`takeaways`, facultatif)** : les points essentiels sont visibles après
  l’introduction et le sommaire éventuel, avant le corps de l’article, y compris pour les BD.

## Pour les prochaines publications

Ajouter au front matter :

```yaml
description: "Votre site d’ostéopathe vous appartient-il vraiment ? Cinq conseils pour garder la main sur votre domaine et vos choix."
takeaways:
  - "Enregistrez le nom de domaine à votre nom et conservez les accès à sa gestion. Vous pourrez ainsi garder votre adresse web si vous changez de prestataire."
  - "Testez votre site sur un téléphone : les coordonnées, l’itinéraire et la prise de rendez-vous doivent être faciles à trouver et à utiliser."
```

Les points acceptent le Markdown (`**gras**`, `*italique*`), le soulignement
avec `<u>texte</u>` et les emojis, directement (`💡`) ou par code (`:bulb:`).
Utiliser ces accents pour faire ressortir quelques mots utiles à la lecture.

- La description doit susciter la curiosité : partir d’une question que se pose le
  lecteur, d’une idée reçue examinée dans l’article ou d’un bénéfice concret.
  Varier les tournures ; garder le sujet et ses mots-clés naturels, sans accumuler
  les thèmes ni promettre davantage que ce que l’article apporte.
- Viser moins de 157 caractères pour éviter la troncature du thème actuel. C’est
  une contrainte de ce site ; Google ajuste ses extraits selon l’affichage et la requête.
- Pour « À retenir », choisir le nombre de points selon ce que l’article apporte,
  sans minimum ni quota. Omettre le champ si la section n’ajoute rien à l’introduction
  ou dévoile la réponse d’un cas interactif.
- Chaque point doit donner une explication, un résultat contextualisé ou une action
  concrète. Expliquer les termes nécessaires et ce qu’ils changent pour le lecteur ;
  éviter les annonces comme « La BD présente… » sans exposer l’idée elle-même.
- Séparer deux idées lorsqu’elles méritent chacune une explication. Ne pas ajouter
  un dernier point de précaution par habitude : garder les limites qui changent
  réellement le sens de l’information, avec le résultat concerné.
- Pour les BD, lire les planches ou le PDF : leur introduction ne suffit pas toujours.
- Dater les statistiques et préciser la population : inscrits au registre, praticiens
  retrouvés en ligne, cabinets, répondants au sondage, etc.
- Attribuer les opinions et distinguer propositions de réforme et droit applicable.
- Ne pas transformer une observation, un sondage volontaire ou un exemple clinique
  en conclusion générale ou en garantie de résultat.
- Les résumés ajoutés en septembre 2026 synthétisent les publications existantes.
  Ils ne constituent pas une révision exhaustive de leurs références cliniques ou
  juridiques ; les dates de publication et de révision des articles ont été conservées.
- Les liens de navigation utilisent les pages Hugo et leurs `RelPermalink`.
  L’index des auteurs est publié à l’adresse définie dans son front matter ; les
  profils conservent leurs adresses historiques.

## Prochaines améliorations proposées

La [lecture du blog Indy et les exemples adaptés à osteopathes.pro](inspiration-indy.md)
précisent le ton recherché et les pistes de navigation ci-dessous.

1. **Lectures liées choisies éditorialement.** Afficher deux ou trois articles avec
   un motif de lecture : après la BD sur les douleurs radiculaires, proposer le
   diagnostic différentiel, puis les signes d’alerte de la queue de cheval.
   Utiliser des références Hugo vers les pages, jamais des URL de production saisies
   dans le composant. Pour les séries IGAS, prévoir aussi précédent / suivant.
2. **Entrées par sujet.** Créer quelques pages de référence : Douleur et pratique
   clinique ; Recherche et EBP ; Installation et vie du cabinet ; Démographie ;
   Profession et politiques de santé. Les formats BD, guides et enquêtes peuvent
   servir de filtres complémentaires aux sections actuelles.
3. **Contenus visuels accessibles en texte.** Compléter les résumés par des
   transcriptions HTML des BD et vidéos, puis des tableaux ou descriptions pour les
   graphiques. Respecter les crédits et autorisations des œuvres traduites.
4. **Révision des contenus de référence.** Prioriser les synthèses cliniques et les
   dossiers juridiques (tendinopathies, CIPAV, CPTS, RGPD, arnaques). Vérifier les
   formulations générales, les règles en vigueur et les liens ; indiquer une date
   de révision seulement après cette vérification. Garder les éditions démographiques
   datées et une page d’entrée qui dirige vers la dernière édition.

Google recommande de rendre le contenu important disponible sous forme textuelle
et de soigner les liens internes, y compris pour ses fonctionnalités d’IA :
[AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

Ses conseils sur les [descriptions et extraits de recherche](https://developers.google.com/search/docs/appearance/snippet)
insistent aussi sur des descriptions uniques, pertinentes et capables d’intéresser
les lecteurs. L’accroche doit rester fidèle au contenu de la page.

## Vérification

Après génération dans un répertoire neuf, `python3 scripts/check-seo.py <répertoire>`
contrôle les descriptions uniques, la validité des sections « À retenir » présentes,
l’index des auteurs et
le fil d’Ariane, ainsi que les autres contrôles SEO existants. Tester aussi avec
une URL locale et une URL de prévisualisation (`--preview` si le contexte Netlify
est `deploy-preview` ou `branch-deploy`).
