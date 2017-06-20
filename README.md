#### Webpack 3 and babel-polyfill issue

* `npm install`
* `npm run build`
* `dist` folder will have the JS files

* `babel-polyfill` is imported in the entry file

#### Errors at runtime

```sh
Uncaught ReferenceError: regeneratorRuntime is not defined
    at Object.<anonymous> (bundle.js:3325)
    at __webpack_require__ (bundle.js:20)
    at bundle.js:63
    at bundle.js:66
```
