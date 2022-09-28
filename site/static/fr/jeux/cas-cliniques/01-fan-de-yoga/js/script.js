/* global monogatari */

function sendEvent(name, opts) {
  try {
    window.plausible(name, opts)
  } catch (error) {}
}

// Define the messages used in the game.
monogatari.action("message").messages({})

// Define the notifications used in the game
monogatari.action("notification").notifications({})

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({})

// Define the canvas objects used in the game
monogatari.action("canvas").objects({})

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {
  Créateurs: {
    "Code, Développement et mise en scène": "Klemen SEVER",
    "Dessin de la patiente et vérification des notions clinique":
      "Laurent MARC"
  },
  Remerciements: {
    Support: ["Konrad FLORKOW"]
  },
  Sources: {
    "Article dont est issu le cas clinique":
      "<a href='https://doi.org/10.23736/s1973-9087.18.05034-7'>DOI: 10.23736/s1973-9087.18.05034-7</a> – Vertebral compression fractures associated with yoga: a case series",
    "Moteur de jeu":
      "<a href='https://monogatari.io/'>Monogatari</a> - Un moteur de jeu open source.",
    Sponsor:
      "<a href='https://www.osteopathes.pro/'>osteopathes.pro</a> - La communauté des ostéopathes professionnels."
  }
})

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {})

// Define the music used in the game.
monogatari.assets("music", {})

// Define the voice files used in the game.
monogatari.assets("voices", {})

// Define the sounds used in the game.
monogatari.assets("sounds", {})

// Define the videos used in the game.
monogatari.assets("videos", {})

// Define the images used in the game.
monogatari.assets("images", {})

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  clinic: "clinic.svg",
  viviane_entrance: "viviane_entrance.svg",
  viviane_living_room: "viviane_living_room.svg"
})

// Define the Characters
monogatari.characters({
  n: {
    name: "Anatole",
    color: "#c4c4c4",
    directory: "narrator",
    sprites: {
      neutral: "neutral.svg"
    },
    expressions: {
      neutral: "expressions/neutral.png"
    },
    default_expression: "neutral"
  },
  p: {
    name: "{{player.given_name}}",
    color: "#e3f5ff",
    directory: "player",
    sprites: {
      neutral: "neutral.svg"
    },
    expressions: {
      neutral: "expressions/neutral.svg"
    },
    default_expression: "neutral"
  },
  v: {
    name: "Viviane",
    color: "#FFBCF6",
    directory: "viviane",
    sprites: {
      angry: "angry.png",
      fear: "fear.png",
      happy: "happy.png",
      neutral: "neutral.png",
      painful: "painful.png",
      serious: "serious.png",
      surprised: "surprised.png",
      clinical_front: "clinical_front.png",
      clinical_back: "clinical_back.png",
      clinical_lateral: "clinical_lateral.png"
    },
    expressions: {
      angry: "expressions/angry.png",
      fear: "expressions/fear.png",
      happy: "expressions/happy.png",
      neutral: "expressions/neutral.png",
      painful: "expressions/painful.png",
      serious: "expressions/serious.png",
      surprised: "expressions/surprised.png"
    },
    default_expression: "neutral"
  }
})

monogatari.script({
  init: [
    {
      Conditional: {
        Condition: function() {
          const {
            player: {given_name}
          } = monogatari.storage()
          return given_name.length > 0
        },
        True: {
          Choice: {
            Text: "Il semblerait que vous ayez déjà joué à ce jeu, voulez-vous ignorer l'introduction ?",
            Ignorer: {
              Text: "Ignorer l'introduction",
              Do: "jump viviane_yoga_start"
            },
            Continuer: {
              Text: "Continuer sans ignorer l'introduction",
              Do: "jump intro"
            }
          }
        },
        False: "jump intro"
      }
    }
  ],

  intro: [
    "show scene #010101 with fadeIn",
    "centered Cas clinique – Fan de Yoga",
    "clear",
    {
      Input: {
        Text: "Pour personnaliser votre partie, dites-moi, quel est votre prénom ?",
        Validation: function(input) {
          return input.trim().length > 0
        },
        Save: function(input) {
          monogatari.storage({
            player: {
              given_name: input
            }
          })
          return true
        },
        Revert: function() {
          monogatari.storage({
            player: {
              given_name: ""
            }
          })
        },
        Warning: "Il vous faut entrer un prénom pour pouvoir continuer."
      }
    },
    "Très bien {{player.given_name}}. Commençons.",
    "⚠️ Attention: lorsqu'il y a de nombreux choix, pensez à faire défiler, surtout sur mobile, pour ne pas rater des possibilités.",
    "show scene clinic with fadeIn",
    "Il est 16h. Vous avez bientôt terminé votre journée de clinique. Votre dernière consultation est prévue à domicile.",
    "Vous vous rendez au domicile de Mme Rolland, une patiente de 62 ans que vous connaissez depuis quelques années.",
    "jump viviane_intro"
  ],

  viviane_intro: [
    "show scene viviane_entrance with fadeIn",
    "show character v neutral at center with fadeIn end-fadeOut",
    "v Ah, bonjour {{player.given_name}}, entrez entrez !",
    "p Comment allez-vous Mme Rolland ?",
    "hide character v neutral",
    "show character v happy at center with fadeIn end-fadeOut",
    "v:happy On a vu mieux !",
    "p Racontez-moi ce qui vous arrive...",
    "jump viviane_talks_start"
  ],

  viviane_talks_start: [
    "show scene viviane_living_room with fadeIn",
    "show character v painful at center with fadeIn",
    "v:painful Voyez-vous, j'ai une douleur dans le dos, entre les épaules qui ne veut pas passer. Ça devient de plus en plus difficile à supporter.",
    "jump viviane_player_choices_pain"
  ],

  viviane_player_choices: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    {
      Choice: {
        Question: {
          Text: "J'ai encore une question à vous poser...",
          Do: "jump viviane_player_choices_pain"
        },
        ClinicalExam: {
          Text: "Passons à l'examen clinique.",
          Do: "jump viviane_clinical_exam_start"
        }
        // Treatment: {
        //   Text: "Passons au traitement.",
        //   Do: "jump viviane_treatment_start",
        // },
      }
    }
  ],

  viviane_player_choices_pain: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    {
      Choice: {
        PainModalitiesHow: {
          Text: "Comment votre douleur est-elle apparue ?",
          Do: "jump viviane_answer_modalities_how"
        },
        PainModalitiesWhen: {
          Text: "Depuis quand avez-vous cette douleur ?",
          Do: "jump viviane_answer_modalities_when"
        },
        PainModalitiesWhere: {
          Text: "Où se situe le point ou la zone où la douleur est maximale ?",
          Do: "jump viviane_answer_modalities_where"
        },
        PainModalitiesEvolution: {
          Text: "Comment votre douleur a-t-elle évoluée depuis son apparition ?",
          Do: "jump viviane_answer_modalities_evolution"
        },
        PainModalitiesNature: {
          Text: "Comment qualifieriez-vous cette douleur ?",
          Do: "jump viviane_answer_modalities_nature"
        },
        // PainModalitiesTemporality: {
        //   Text: "La douleur est-elle constante ? intermittente ? matinale ? nocturne ?",
        //   Do: "jump viviane_answer_modalities_temporality",
        // },
        PainModalitiesVariation: {
          Text: "Qu'est-ce qui soulage et qu'est-ce qui aggrave votre douleur ?",
          Do: "jump viviane_answer_modalities_variation"
        },
        PainModalitiesAssociated: {
          Text: "Y a-t-il d'autres problèmes associés à votre douleur ?",
          Do: "jump viviane_answer_modalities_associated"
        },
        PainModalitiesFirst: {
          Text: "Est-ce que c'est la première fois que ça vous arrive ?",
          Do: "jump viviane_answer_modalities_first"
        },
        PainModalitiesNeurological: {
          Text: "Avez-vous des décharges electriques ou avez-vous remarqué une perte de force dans vos jambes, ou lors de la marche ?",
          Do: "jump viviane_answer_modalities_neurological"
        },
        PainModalitiesTreatment: {
          Text: "Avez-vous un traitement pour cette douleur ?",
          Do: "jump viviane_answer_modalities_treatment"
        },
        PainModalitiesExams: {
          Text: "Avez-vous fait des examens complémentaires en rapport avec cette douleur ?",
          Do: "jump viviane_answer_modalities_exams"
        }
      }
    }
  ],

  viviane_answer_modalities_how: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v Vous allez trouver ça bizarre mais c'était au dernier cours de yoga. On faisait la posture de la chandelle.",
    "show character v happy at center with fadeIn",
    "v:happy La prof nous a fait faire un enchainement de postures qu'on fait assez souvent.",
    "show character v neutral at center with fadeIn",
    "v Au moment d'arriver dans la posture en question, j'ai senti cette douleur arriver assez rapidement. Ça m'a empêché de faire le reste du cours.",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_when: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v Ça a commencé avant-hier, pendant le cours de yoga. Je n'ai pas pu terminer le cours et je suis rentrée chez moi à pieds.",
    "v Depuis ça ne s'améliore pas vraiment, en fin de journée c'est assez fort et ça me gêne dans certains mouvements.",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_where: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v Attendez, quand je reste longtemps assise comme maintenant, je ne la sens plus trop mais il suffit que je bouge un peu pour la sentir.",
    "show character v painful at center with fadeIn",
    "v:painful Voilà, après quelques mouvements, je la sens mieux: c'est pile entre les omoplates.",
    "show character v neutral at center with fadeIn",
    "v Depuis que c'est arrivé, j'ai rééssayé de faire du yoga, ça me fait souvent du bien. Mais là, ça rend la douleur insupportable.",
    "show character v fear at center with fadeIn",
    "v:fear J'espère que ça ne va pas m'empêcher de faire mon stage de yoga dans 3 semaines !",
    // TODO: Add filler question for discussion & realism
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_evolution: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v C'est assez variable. Sur le moment c'était assez fort et je suis restée assise le reste du cours de yoga.",
    "v Ensuite je suis rentrée chez moi à pieds et je l'ai sentie pendant le trajet. La nuit d'avant-hier s'est bien passé mais dès le matin la douleur était revenue.",
    "v J'ai tenté de refaire un peu de yoga pour détendre mon dos mais c'était vraiment pire alors depuis je suis au calme mais dès que je m'affaire ça réveille la douleur et je dois m'arrêter.",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_nature: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v Hm, difficile à dire, c'est assez vif. J'ai un point douloureux bien précis.",
    "v Des fois j'ai l'impression que ça tire dans les muscles du dos, entre les omoplates mais c'est que si je bouge trop.",
    "v En tout cas plus je bouge, plus c'est fort et je dois m'arrêter pour que ça se calme.",
    "jump viviane_player_choices"
  ],
  // viviane_answer_modalities_temporality: [
  //   "jump viviane_player_choices"
  // ],
  viviane_answer_modalities_variation: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v J'ai remarqué que c'est surtout le fait de bouger qui aggrave mes douleurs. Si je reste sans trop bouger le haut du corps, ça peut encore aller.",
    "v Je sais que bouger me fait du bien donc j'ai essayé de faire ma routine de yoga mais ça a rendu la douleur bien plus forte pour le reste de la journée.",
    "show character v happy at center with fadeIn",
    "v:happy Depuis que c'est arrivé, ça n'a pas trop diminué, bien au contraire, donc j'ai préféré vous appeler.",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_associated: [
    "show scene viviane_living_room with fadeIn",
    "show character v neutral at center with fadeIn",
    "v Hm rien de spécial...",
    "show character v surprised at center with fadeIn",
    "v:surprised Ah si ! Quand je tousse, ça réveille bien fort la douleur. Bizarre non ?",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_first: [
    "show scene viviane_living_room with fadeIn",
    "show character v surprised at center with fadeIn",
    "v:surprised Ah oui ce genre de douleur, je ne me souviens pas en avoir déjà eu de pareille.",
    "show character v fear at center with fadeIn",
    "v:fear J'espère que c'est pas une mauvaise nouvelle...",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_neurological: [
    "show scene viviane_living_room with fadeIn",
    "show character v happy at center with fadeIn",
    "v:happy Ah non ça va. Je me souviens quand j'étais venue vous voir pour ma sciatique. Ça c'était des fourmillements !",
    "show character v neutral at center with fadeIn",
    "v Je suis rentrée à pieds de mon cours et je suis sortie ce matin chercher mon pain et je n'ai pas eu de difficultés pour monter mes escaliers.",
    "show character v happy at center with fadeIn",
    "v:happy Ça veut sûrement dire que ça va pas si mal ! Haha",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_treatment: [
    "show scene viviane_living_room with fadeIn",
    "show character v happy at center with fadeIn",
    "v:happy Eh bien oui, vous !",
    "v:happy Je plaisante, j'ai pris un doliprane hier matin quand la douleur s'est réveillée mais ça n'a pas été très efficace.",
    "jump viviane_player_choices"
  ],
  viviane_answer_modalities_exams: [
    "show scene viviane_living_room with fadeIn",
    "show character v angry at center with fadeIn",
    "v:angry Vous n'y pensez pas, le moindre rendez-vous avec mon médecin généraliste, c'est pas avant 3 semaines !",
    "jump viviane_player_choices"
  ],

  viviane_clinical_exam_start: [
    "show scene viviane_living_room with fadeIn",
    "show character p neutral at center with fadeIn",
    "p Je vais regarder tout ça, je vous demanderai peut être de faire quelques mouvements. Dites moi si c'est trop douloureux ou impossible, il n'y a pas besoin de forcer.",
    "p Pour commencer, pourriez-vous passer en sous-vêtements pour que je puisse mieux examiner votre dos ?",
    "hide character p",
    "show character v clinical_front at center with fadeIn",
    "v:happy Oui bien sûr. Voilà. Où est-ce que je me place ?",
    "hide character v",
    "show character p neutral at center with fadeIn",
    "p Vous pouvez vous mettre ici, au centre du salon. Ça sera parfait.",
    "jump viviane_clinical_exam_choices_tests"
  ],
  viviane_clinical_exam_choices: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    {
      Choice: {
        Question: {
          Text: "J'ai encore un examen à effectuer...",
          Do: "jump viviane_clinical_exam_choices_tests"
        },
        Treatment: {
          Text: "Passons au traitement.",
          Do: "jump viviane_treatment_start"
        }
      }
    }
  ],
  viviane_clinical_exam_choices_tests: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    {
      Dialog: "Quel examen souhaitez-vous faire ?",
      Choice: {
        ClinicalExamObservationStandingProfile: {
          Text: "Observation de profil, debout",
          Do: "jump viviane_clinical_exam_observation_standing_profile"
        },
        ClinicalExamObservationStandingFace: {
          Text: "Observation de face, debout",
          Do: "jump viviane_clinical_exam_observation_standing_face"
        },
        ClinicalExamObservationStandingBack: {
          Text: "Observation de dos, debout",
          Do: "jump viviane_clinical_exam_observation_standing_back"
        },
        ClinicalExamPalpationOfTheBack: {
          Text: "Palpation du dos (os et tissus mous)",
          Do: "jump viviane_clinical_exam_palpation_back"
        },
        ClinicalExamLowerLimbReflexes: {
          Text: "Réflexes des membres inférieurs",
          Do: "jump viviane_clinical_exam_lower_limb_reflexes"
        },
        ClinicalExamUpperLimbReflexes: {
          Text: "Réflexes des membres supérieurs",
          Do: "jump viviane_clinical_exam_upper_limb_reflexes"
        },
        ClinicalExamThoracicPercussion: {
          Text: "Percussion vertébrale de T1 à T12",
          Do: "jump viviane_clinical_exam_thoracic_percussion"
        },
        ClinicalExamThoracicVibration: {
          Text: "Test au diapason sur les vertèbres",
          Do: "jump viviane_clinical_exam_thoracic_vibration"
        },
        ClinicalExamAbdominalCutaneousReflexes: {
          Text: "Test des réflexes cutanés abdominaux",
          Do: "jump viviane_clinical_exam_abdominal_cutaneous_reflexes"
        },
        ClinicalExamActiveMovements: {
          Text: "Mouvements actifs du thorax",
          Do: "jump viviane_clinical_exam_active_movements"
        }
      }
    }
  ],
  viviane_clinical_exam_observation_standing_profile: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_lateral at center with fadeIn",
    "Vous constatez que Viviane Rolland a une cyphose thoracique assez prononcée. Elle porte sa tête vers l'avant.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_observation_standing_face: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Rien de spécial à noter sur l'observation debout de face.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_observation_standing_back: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_back at center with fadeIn",
    "Rien de spécial à noter sur l'observation debout de dos.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_palpation_back: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_back at center with fadeIn",
    "Les paravertébraux de T5 à T9 sont hypertoniques.",
    "Vous voyez que la palpation des processus épineux de T6 à T8 crispe Mme Rolland et qu'ils sont très sensibles à la palpation. Vous n'insistez pas.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_lower_limb_reflexes: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Les réflexes du membre inférieur sont présents, normaux et symmétriques.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_upper_limb_reflexes: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Les réflexes du membre supérieur sont présents, normaux et symmétriques.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_thoracic_percussion: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_back at center with fadeIn",
    "Vous commencez les percussions sur T1 avec votre marteau reflexe que vous tapez sur vos propres doigts et descendez progressivement vers T12.",
    "En arrivant à T5, Mme Rolland vous dit sentir une douleur un peu plus bas dans le dos.",
    "Lorsque vous arrivez sur T7, Mme Rolland vous décrit une douleur vive et vous demande de ne pas recommencer.",
    "Sur T8 le test est très désagréable mais pas autant que sur T7.",
    "En dessous, le test est de moins en moins pénible.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_thoracic_vibration: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_back at center with fadeIn",
    "Vous commencez le test des vibrations sur T1 avec votre diapason et descendez progressivement vers T12.",
    "La pose du diapason sur T1 ne provoque rien.",
    "À partir de T5, les vibration du diapason réveillent une douleur située plus bas.",
    "Sur T7, le diapson aggrave la douleur en regard. Mme Rolland vous demande de ne pas trop insister.",
    "En dessous de T7, le diapason a de moins en moins d'effet sur la douleur située plus haut.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_abdominal_cutaneous_reflexes: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Vous effleurez la peau transversalement dans la zone abdominale trois fois.",
    "Dans la zone supérieure (T6-T8), la contraction est symmétrique et l'ombilic n'est pas dévié.",
    "Dans la zone moyenne (T8-T10), la contraction est symmétrique et l'ombilic n'est pas dévié.",
    "Dans la zone inférieure (T10-T12), la contraction est symmétrique et l'ombilic n'est pas dévié.",
    "jump viviane_clinical_exam_choices"
  ],
  viviane_clinical_exam_active_movements: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Vous demandez à Mme Rolland de faire une extension du tronc. Elle trouve cela un peu déseagréable mais arrive à faire de l'extension à peu près normale.",
    "La flexion est plus difficile, Mme Rolland se fige rapidement lorsqu'elle tente de se pencher vers l'avant. Continuer lui est trop douloureux.",
    "Les inclinaisons droites et gauche du tronc sont correctes mais douloureuses en fin d'amplitude.",
    "Mme Rolland n'ose faire beaucoup de rotations.",
    "Au delà de l'apréhension, vous voyez que Mme Rolland ne peut faire que quelques degrés de rotation mais ne peut aller plus loin.",
    "jump viviane_clinical_exam_choices"
  ],

  viviane_treatment_start: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    "Maintenant que l'examen clinique est effectué, vous aller passer au traitement.",
    {
      Dialog: "Quel traitement souhaitez-vous proposer ?",
      Choice: {
        TreatmentMobilisation: {
          Text: "Mobilisation passive douce du dos, des épaules et du cou pour relâcher les muscles",
          Do: "jump viviane_treatment_passive"
        },
        TreatmentHVLA: {
          Text: "Technique ostéo-articulaire sur T7 pour relâcher les tensions du dos",
          Do: "jump viviane_treatment_passive"
        },
        TreatmentSoft: {
          Text: "Traitement par technique de massage des tissus mous de la zone du dos",
          Do: "jump viviane_treatment_passive"
        },
        TreatmentMovement: {
          Text: "Faire bouger Mme Rolland avec des mouvements actifs du dos",
          Do: "jump viviane_treatment_active"
        },
        TreatmentReferral: {
          Text: "Pas de traitement, je réfère au médecin.",
          Do: "jump viviane_treatment_referral"
        }
      }
    },
    "jump viviane_treatment_passive"
  ],

  viviane_treatment_passive: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameTreatmentChoice", {
            props: {choice: "passive_treatment"}
          })
        },
        Reverse: function() {}
      }
    },
    "p Pourriez-vous vous allonger sur le ventre Mme Rolland ?",
    "v:happy Je vais essayer mais je ne garantit rien !",
    "v:painful C'est très douloureux, est-ce vraiment nécessaire ?",
    "p Mettez-vous aussi confortable que possible et sans vous presser.",
    "Vous commencez votre traitement mais Mme Rolland ressent une vive douleur qui ne passe pas malgré les mobilisations et les massages.",
    "v:painful C'est excessivement douloureux. J'ai vraiment trop mal pour continuer.",
    "jump viviane_failed"
  ],
  viviane_treatment_active: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameTreatmentChoice", {
            props: {choice: "active_treatment"}
          })
        },
        Reverse: function() {}
      }
    },
    "p Que diriez-vous par commencer quelques petits mouvements léger, comme le fait de se pencher en avant et de relâcher la tête et les épaules ?",
    "v:surprised Vous pensez que ça peut aider ? Essayons...",
    "p Si cela peut vous aider, essayez de rajouter une respiration lente et profonde et essayez de relâcher le haut du corps comme une poupée de chiffons",
    "v:painful Je n'y arrive pas. Dès que je me penche vers l'avant, c'est pire.",
    "Malgré les mouvements en douceur et les exercices de relaxation, la zone reste fortement contractée et douloureuse.",
    "jump viviane_failed"
  ],
  viviane_treatment_referral: [
    "show scene viviane_living_room with fadeIn",
    "show character v clinical_front at center with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameTreatmentChoice", {
            props: {choice: "referral"}
          })
        },
        Reverse: function() {}
      }
    },
    "p Il semblerait que je ne puisse pas m'occuper de vos douleurs immédiatement Mme Rolland.",
    "p En effet, certains éléments me font penser que vous devriez voir votre médecin ou les urgences dans les prochains jours.",
    {
      Choice: {
        Dialog: "Que suspectez-vous ?",
        DiagnosticInfectiousSpondylodiscitis: {
          Text: "Une spondylodiscite infectieuse",
          Do: "jump viviane_treatment_fracture_infection"
        },
        DiagnosticFracture: {
          Text: "Fracture vertébrale",
          Do: "jump viviane_treatment_referral_fracture"
        },
        DiagnosticArthritis: {
          Text: "Inflammation des articulations inter-vertébrales",
          Do: "jump viviane_treatment_arthritis"
        }
      }
    }
  ],
  viviane_treatment_fracture_infection: [
    "show scene #010101 with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameReferralCause", {
            props: {cause: "infection"}
          })
        },
        Reverse: function() {}
      }
    },
    "centered Vous réferrez Mme Rolland chez son médecin. Celui-ci effectue un examen clinique et une radiographie qui révèle une fracture tassement en T7/T8.",
    "show scene #5a476c with fadeIn",
    "centered Vous avez eu la bonne conduite à tenir dans ce cas. Malheureusement vous n'avez pas suspecté la bonne chose.",
    "centered Fin",
    "show scene #377dff with fadeIn",
    "centered Suivez nous sur les réseaux et créez un compte pour être prévenu·e des prochains épisodes 😉",
    "centered osteopathes.pro – Logiciels et jeux pour ostéopathes.",
    "end"
  ],
  viviane_treatment_referral_fracture: [
    "show scene #010101 with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameReferralCause", {
            props: {cause: "fracture"}
          })
        },
        Reverse: function() {}
      }
    },
    "centered Vous réferrez Mme Rolland chez son médecin. Celui-ci effectue un examen clinique et une radiographie qui révèle une fracture tassement en T7/T8.",
    "show scene #1a7e00 with fadeIn",
    "centered Félicitations, vous avez trouvé un drapeau rouge !",
    "centered Fin",
    "show scene #377dff with fadeIn",
    "centered Suivez nous sur les réseaux et créez un compte pour être prévenu·e des prochains épisodes 😉",
    "centered osteopathes.pro – Logiciels et jeux pour ostéopathes.",
    "end"
  ],
  viviane_treatment_arthritis: [
    "show scene #010101 with fadeIn",
    {
      Function: {
        Apply: function() {
          sendEvent("YogaGameReferralCause", {
            props: {cause: "arthritis"}
          })
        },
        Reverse: function() {}
      }
    },
    "centered Vous réferrez Mme Rolland chez son médecin. Celui-ci effectue un examen clinique et une radiographie qui révèle une fracture tassement en T7/T8.",
    "show scene #5a476c with fadeIn",
    "centered Vous avez eu la bonne conduite à tenir dans ce cas. Malheureusement vous n'avez pas suspecté la bonne chose.",
    "centered Fin",
    "show scene #377dff with fadeIn",
    "centered Suivez nous sur les réseaux et créez un compte pour être prévenu·e des prochains épisodes 😉",
    "centered osteopathes.pro – Logiciels et jeux pour ostéopathes.",
    "end"
  ],
  viviane_failed: [
    "show scene #010101 with fadeIn",
    "centered Malheureusement Mme Rolland, ne supportant plus les douleurs suite à votre intervention consulte en urgence le lendemain et une radiographie révèle une fracture tassement en T7/T8.",
    "show scene #c10210 with fadeIn",
    "centered Vous n'avez pas eu la bonne conduite à tenir. Analysez mieux les indices.",
    "centered Fin",
    "show scene #377dff with fadeIn",
    "centered Suivez nous sur les réseaux et créez un compte pour être prévenu·e des prochains épisodes 😉",
    "centered osteopathes.pro – Logiciels et jeux pour ostéopathes.",
    "end"
  ]
})
