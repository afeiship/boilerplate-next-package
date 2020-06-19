(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { context: global };

  nx.boilerplatePackage = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    // package codes...
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.boilerplatePackage;
  }
})();
