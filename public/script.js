(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else {
    global.greet = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  function greet(name) {
    const trimmed = (name || '').trim();
    if (!trimmed) return 'Olá!';
    return `Olá, ${trimmed}!`;
  }
  return greet;
});