const nx = require('next-js-core2');
require('../src/next-boilerplate-package');

describe('api.basic test', () => {
  test('nx.boilerplatePackage', function() {
    const obj1 = { name: 'fei' };
    const obj2 = { email: '1290657123@qq.com' };
    const result = {};
    nx.boilerplatePackage(result, obj1, obj2);
    expect(result.name, obj1.name).toBe(null);
  });
});
