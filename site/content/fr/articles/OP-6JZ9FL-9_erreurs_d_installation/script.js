// === include "setup" then "config" above ===
var ctx = document.getElementById("js-polar-chart")
var ctx_md = document.getElementById("js-polar-chart-md")


var chart = new Chart(ctx,
  {
    type: "polarArea",
    data: {
      labels: [
        "comm. interpro",
        "comm. intrapro",
        "comm. publique",
        "local",
        "lieu d'exercice",
        "type de cabinet",
        "equipements",
        "services",
        "administratif/compta/juridique",
        "expérience"
      ],
      datasets: [{
        label: "Catégories des erreurs d'installation",
        data: [9, 8, 10, 9, 16, 6, 4, 6, 7, 4],
        backgroundColor: [
          "rgb(9, 135, 217)",
          "rgb(0, 168, 254)",
          "rgb(0, 186, 103)",
          "rgb(253, 128, 3)",
          "rgb(255, 157, 3)",
          "rgb(255, 187, 79)",
          "rgb(238, 211, 0)",
          "rgb(239, 70, 62)",
          "rgb(114, 70, 254)",
          "rgb(210, 193, 253)"
        ],
        borderWidth: 0
      }]
    },
    options:
    {
      plugins: {
        aspectRatio: 1.5,
        // title: {
        //   display: true,
        //   text: "Proportions des catégories retrouvées dans les réponses",
        //   padding: {
        //     bottom: 10
        //   }
        // },
        legend: {
          display: false,
          padding: 10
        }
      },
      layout: {
        padding: 0
      }
    }
  })

var chart_md = new Chart(ctx_md,
  {
    type: "polarArea",
    data: {
      labels: [
        "comm. interpro",
        "comm. intrapro",
        "comm. publique",
        "local",
        "lieu d'exercice",
        "type de cabinet",
        "equipements",
        "services",
        "administratif/compta/juridique",
        "expérience"
      ],
      datasets: [{
        label: "Catégories des erreurs d'installation",
        data: [9, 8, 10, 9, 16, 6, 4, 6, 7, 4],
        backgroundColor: [
          "rgb(9, 135, 217)",
          "rgb(0, 168, 254)",
          "rgb(0, 186, 103)",
          "rgb(253, 128, 3)",
          "rgb(255, 157, 3)",
          "rgb(255, 187, 79)",
          "rgb(238, 211, 0)",
          "rgb(239, 70, 62)",
          "rgb(114, 70, 254)",
          "rgb(210, 193, 253)"
        ],
        borderWidth: 0
      }]
    },
    options:
      {
        plugins: {
          aspectRatio: 1.5,
          title: {
            display: true,
            text: "Nombre d'occurence de chaque catégorie dans les réponses",
            padding: {
              bottom: 10
            }
          },
          legend: {
            display: true,
            padding: 10
          }
        },
        layout: {
          padding: 0
        }
      }
  })
