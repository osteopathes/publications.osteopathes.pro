// JS Goes here - ES6 supported

import "alpinejs"
import "cookieconsent"
import {add_google_tag_manager, remove_google_tag_manager} from "./cookies";

import "./css/main.css"

// Cookies
window.addEventListener('load', function () {
// @ts-ignore
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#2c7a7b'
      },
      button: {
        background: '#f1d600'
      }
    },
    cookie: {
      name: 'cookie_privacy',
      domain: '.osteopathes.pro',
      secure: true,
    },
    location: false,
    onInitialise: function (_status) {
      const type = this.options.type
      const didConsent = this.hasConsented()
      if (type === 'opt-in' && didConsent) {
        add_google_tag_manager('UA-136514063-2')
      }
    },

    onStatusChange: function (_status, _chosenBefore) {
      const type = this.options.type
      const didConsent = this.hasConsented()
      if (type === 'opt-in' && didConsent) {
        add_google_tag_manager('UA-136514063-2')
      }
    },

    onRevokeChoice: function () {
      const type = this.options.type
      if (type === 'opt-in') {
        remove_google_tag_manager('UA-136514063-2')
      }
    },
    theme: 'classic',
    // position: "bottom-right",
    position: 'bottom',
    // static: true,
    type: 'opt-in',
    revokable: true,
    revokeBtn: '<div class="cc-revoke {{classes}}">Configurer mes Cookies</div>',
    content: {
      message: 'Ce site utilise des cookies nécessaires à son fonctionnement ' +
      "ainsi que des cookies optionnels pour l'analyse d'audience et la personnalisation " +
      '(du site, du contenu, des publicités). Si vous souhaitez ' +
      "obtenir plus d'informations et gérer vos préférences, consultez notre ",
      dismiss: "C'est noté !",
      deny: 'Refuser',
      allow: 'Autoriser les cookies',
      link: 'politique sur les cookies',
      href: 'https://www.iubenda.com/privacy-policy/42191435/cookie-policy'
    }
  })
});

// Toggle the toc-menu
var elToc = document.getElementById("toc-open")
if (elToc && typeof elToc !== "undefined") {
  document.getElementById("toc-open").onclick = function() {
    document.getElementById("toc-menu").classList.toggle("hidden")
    document.getElementById("toc-open").classList.toggle("hidden")
    document.getElementById("toc-close").classList.toggle("hidden")
  }
  document.getElementById("toc-close").onclick = function() {
    document.getElementById("toc-menu").classList.toggle("hidden")
    document.getElementById("toc-close").classList.toggle("hidden")
    document.getElementById("toc-open").classList.toggle("hidden")
  }
}

// Fix table of contents
(function() {
  var toc = document.getElementById("TableOfContents")
  if (!toc) return
  var li; var ul = toc.querySelector("ul")
  if (ul.childElementCount !== 1) return
  li = ul.firstElementChild
  if (li.tagName !== "LI") return
  // remove <ul><li></li></ul> where <ul> only contains one <li>
  ul.outerHTML = li.innerHTML
})()

// Wrap tables into overflow-able div
var tablesList = document.querySelectorAll("table")
tablesList.forEach(function(tableItem) {
  var parent = tableItem.parentNode
  var wrapper = document.createElement("div")
  wrapper.className = "overflow-scroll"
  parent.insertBefore(wrapper, tableItem)
  wrapper.appendChild(tableItem)
})

/* Progress bar */
// Source: https://alligator.io/js/progress-bar-javascript-css-variables/
var h = document.documentElement
var b = document.body
var st = "scrollTop"
var sh = "scrollHeight"
var progress = document.querySelector("#progress")
var scroll
var scrollpos = window.scrollY
if (progress !== null) {
  document.addEventListener("scroll", function() {
    /* Refresh scroll % width */
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
    progress.style.setProperty("--scroll", scroll + "%")
    /* Apply classes for slide in bar */
    scrollpos = window.scrollY
    if (scrollpos > 56) {
      progress.classList.remove("hidden")
    } else {
      progress.classList.add("hidden")
    }
  })
}

// Say hello
console.log("🦊 Bonjour!")
