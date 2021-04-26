(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { context: global };

  nx.boilerplatePackage = function (inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    // package codes...
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.boilerplatePackage;
  }
})();
