(function () {
  var global = window || global || this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global };

  nx.boilerplatePackage = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    // package codes...
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.boilerplatePackage;
  }
})();
