# Testing out Parcel bundler with simple setups

My experiences:

#### 'Vanilla' ES6 ES7 Javascript:

Worked out of the box with ES6. Promises worked fine in Chrome and Firefox, but to get async/await to work with promises had to install the following packages `babel-plugin-transform-runtime` and `babel-runtime`, then add this .babelrc file

```json
{
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false,
        "regenerator": true
      }
    ]
  ]
}
```
Alternatively you can simply use `import "babel-polyfill";`, after of course installing the package.

#### React
No issues at all, I simply added `react` and `react-dom` packages, used the .jsx file extension and the simple React component rendered fine with no issues.

#### Typescript
Also no issues, simply added the `typescript` npm package to the dependencies and added the app.ts file as a script. Works out of the box, amazing