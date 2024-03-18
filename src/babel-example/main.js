// アロー関数を使う
const sayHello = (name) => `Hello, ${name}!`;

const asyncFunc = async () => {
  const result = await Promise.resolve('Hello, async/await!');
  console.log(result);
}

await asyncFunc();

console.log(sayHello('world'));
