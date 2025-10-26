const assert = require('assert');
const greet = require('../public/script.js');

function run() {
  assert.strictEqual(greet('Ana'), 'Olá, Ana!');
  assert.strictEqual(greet(''), 'Olá!');
  assert.strictEqual(greet('   '), 'Olá!');
  assert.strictEqual(greet(' João '), 'Olá, João!');
  console.log('Todos os testes de greet passaram.');
}

run();