import { sayHello } from '../CommonJS/module1.js'

console.log(typeof module === 'undefined' && 'ESModule🎉')
// ESMからCommonJSは呼び出すことができる
console.log(sayHello())
