class CookieStorage {
  // format cookie to js object
  get cookies() {
    const cookies = {}

    const cookiesString = document.cookie

    if (cookiesString === "") {
      return cookies
    }

    const list = cookiesString.split("; ")

    list.forEach(cookie => {
      const pos = cookie.indexOf("=")
      const key = cookie.substring(0, pos)
      const value = cookie.substring(pos + 1)

      cookies[key] = decodeURIComponent(value)
    })

    return cookies
  }

  get keys() {
    return Object.keys(this.cookies)
  }

  get length() {
    return this.keys.length
  }

  getItem(key) {
    return this.cookies[key] || null
  }

  setItem(key, value, { maxage = '', path = '' }) {
    let cookie = `${key}=${encodeURIComponent(value)}`

    if (maxage) {
      cookie += `; max-age=${maxage}`
    }

    if (path) {
      cookie += `; path=${path}`
    }

    document.cookie = cookie
  }

  removeItem(key) {
    if (!(key in this.cookies)) {
      return
    }

    document.cookie = `${key}=; max-age=0`
  }

  clear() {
    this.keys.forEach(key => {
      document.cookie = `${key}=; max-age=0`
    })
  }
}

module.exports = CookieStorage
module.exports.default = CookieStorage
