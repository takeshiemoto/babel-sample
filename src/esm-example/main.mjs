import msg1, { messageFromModule1 } from './module1.mjs'
import msg2, { messageFromModule2 } from './module2.mjs'

// undefined = ESM
console.log(typeof module);

console.log(msg1);
console.log(msg2);

console.log(messageFromModule1);
console.log(messageFromModule2);
