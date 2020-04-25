// Google Tag Manager
export function add_google_tag_manager (uatag) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://www.googletagmanager.com/gtag/js?id=${uatag}`
  document.head.appendChild(script)
  script.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag (...args) { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', uatag, { anonymize_ip: true })
  }
}

export function remove_google_tag_manager (uatag) {
  [
    '_ga',
    '_gid',
    `_gat_gtag_${uatag.replace(/-/g, '_')}`,
    `_gac_gtag_${uatag.replace(/-/g, '_')}`,
    `_dc_gtm_${uatag.replace(/-/g, '_')}`
  ].map((name) => {
    delete_cookie(name)
  })
}

// Tools & useful functions
export function get_cookies_map () {
  const cookies = {}
  if (document.cookie && document.cookie !== '') {
    const split = document.cookie.split(';')
    for (let i = 0; i < split.length; i++) {
      const name_value = split[i].split('=')
      name_value[0] = name_value[0].replace(/^ /, '')
      cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1])
    }
  }
  return cookies
}

export function delete_cookie (name) {
  if (name instanceof RegExp) {
    const cookies = this.get_cookies_map()
    for (let cname in cookies) {
      if (name.test(cname)) {
        document.cookie = cname + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      }
    }
  } else {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

