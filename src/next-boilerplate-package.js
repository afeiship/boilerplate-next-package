(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.boilerplatePackage = function() {
    //code goes here.
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.boilerplatePackage;
  }
})();
