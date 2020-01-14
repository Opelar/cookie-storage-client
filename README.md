# CookieStorage

Manage `document.cookie` using the [Storage API][storage-api].


# install

```shell
npm install CookieStoage
```

## example

```javascript
// const CookieStoage = require('cookie-storage-client'); // cjs
import CookieStoage from 'cookie-storage-client'; // es

const cookieStorage = new CookieStoage(); // instance

const cookies = cookieStorage.cookies; // { key: 'value' }

// getItem(key)
cookieStorage.getItem('key')

// setItem(key, value, option?)
cookieStorage.setItem('key', 'value')

// clear
cookieStorage.clear()

// get length
cookieStorage.length // 0

```

## #length

Returns number of key/value pairs present in `document.cookie`

## #getItem(key)

Returns the cookie value for `key`.

## #setItem(key, value, options={})

Sets the cookie at `key` to `value` with additional options:

- `expires`: see [cookie documentation][cookie-docs]
- `path`: see [cookie documentation][cookie-docs]

## #removeItem(key)

Removes the given key from `document.cookie`.

## #clear()

Clears `document.cookie` of all key/value pairs.

[storage-api]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[cookie-docs]: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
