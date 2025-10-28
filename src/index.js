import Alpine from "alpinejs"

import "./css/main.css"

window.Alpine = Alpine

Alpine.start()

/*
 * Footnotes
 */
const footnotes = document.querySelector(".footnotes")

// Only run this code if there are footnotes on the page.
if (footnotes) {
  /**
   * Set attribute value for given selector.
   *
   * @param {String} selector - Selector to set attribute for.
   * @param {String} attribute - Attribute to set.
   * @param {String} value - Value for the attribute.
   */
  const setAttributeValue = ({selector, attribute, value}) => {
    if (!selector || !attribute || !value) {
      return
    }

    const items = document.querySelectorAll(selector)

    if (!items.length) {
      return
    }

    // eslint-disable-next-line no-unused-vars
    for (const item of items) {
      item.setAttribute(attribute, value)
    }
  }
  const title = "Notes"
  const id = "footnotes-label"

  // Create an <h2> element and add it to the beginning of the .footnotes element.
  const element = document.createElement("h2")
  const text = document.createTextNode(title)

  element.appendChild(text)
  element.classList.add(
    "text-3xl",
    "font-extrabold",
    "leading-8",
    "tracking-tight",
    "text-center",
    "sm:text-4xl",
    "sm:leading-10"
  )
  element.id = id

  footnotes.insertBefore(element, footnotes.firstChild)

  // Use the footnotes title to describe each reference.
  setAttributeValue({
    selector: "a.footnote-ref",
    attribute: "aria-describedby",
    value: id
  })

  // Add a 'Retour au contenu' label to each back-to-content link.
  setAttributeValue({
    selector: ".footnote-backref",
    attribute: "aria-label",
    value: "Retour au contenu"
  })
}

/*
 * Table of contents
 */
(() => {
  const toc = document.getElementById("TableOfContents")
  if (!toc) {
    return
  }
  const ul = toc.querySelector("ul")
  if (ul.childElementCount !== 1) {
    return
  }
  const li = ul.firstElementChild
  if (li.tagName !== "LI") {
    return
  }
  // remove <ul><li></li></ul> where <ul> only contains one <li>
  ul.outerHTML = li.innerHTML
})()

// Wrap tables into overflow-able div
const tablesList = document.querySelectorAll("table")
tablesList.forEach(function(tableItem) {
  tableItem.className = "min-w-full overflow-scroll"
  // const parent = tableItem.parentNode
  // const wrapper = document.createElement("div")
  // wrapper.className = "inline-block min-w-full overflow-scroll align-middle"
  // parent.insertBefore(wrapper, tableItem)
  // wrapper.appendChild(tableItem)
})

/*
 * Reading progress bar
 */
// Source: https://alligator.io/js/progress-bar-javascript-css-variables/
const h = document.documentElement
const b = document.body
const st = "scrollTop"
const sh = "scrollHeight"
const progress = document.querySelector("#progress")
let scroll
let scrollpos = window.scrollY
if (progress !== null) {
  document.addEventListener("scroll", function() {
    /* Refresh scroll % width */
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
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

/*
 * Smooth scrolling
 */
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(() => {
  scrollTo()
})()

function scrollTo() {
  const links = document.getElementsByTagName("a")
  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    if (
      link.href &&
      link.href.indexOf("#") !== -1 &&
      (link.pathname === location.pathname ||
        "/" + link.pathname === location.pathname) &&
      link.search === location.search
    ) {
      link.onclick = scrollAnchors
    }
  }
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top)
  e.preventDefault()
  let targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href")
  targetID = targetID.replace(":", "\\:")
  let targetAnchor
  try {
    targetAnchor = document.querySelector(targetID)
  } catch (err) {
    return
  }
  if (!targetAnchor) return
  const originalTop = distanceToTop(targetAnchor)
  window.scrollBy({top: originalTop, left: 0, behavior: "smooth"})
  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1"
      targetAnchor.focus()
      window.history.pushState("", "", targetID)
      clearInterval(checkIfDone)
    }
  }, 100)
}

// Say hello
// console.log("🦊 Bonjour!")
