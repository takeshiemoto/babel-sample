function printModuleSystem() {
  return typeof module === 'undefined' ? 'ESModule' : 'CommonJS'
}

console.log(printModuleSystem());