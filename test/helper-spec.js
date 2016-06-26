var assert = require('assert');
var helper = require('../src/scripts/modules/helper.js');
var model = require('../src/scripts/modules/model.js');

model.menuItem = {
  'title': 'Prova',
  'count': 234,
  'id': 1
};

model.menu = [
  {
    'title': 'aa',
    'count': 2,
    'id':1
  },
  {
    'title': 'bb',
    'count': 5,
    'id':2
  }
];

describe('Helper test', function() {
  describe('increment', function() {
    it('Dovrebbe incr count', function() {
      helper.increment();
      assert.equal(model.menuItem.count, 235);
    });
  });

  describe('setCurrent', function() {
    it('Dovrebbe set current menu item', function() {
      helper.setCurrent(2);
      assert.equal(model.menuItem.id, 2);
    });
  });

  describe('getCurrent', function() {
    it('Dovrebbe mostrare current item', function() {
      helper.setCurrent(1);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 1);
      helper.setCurrent(2);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 2);
    });
  });
});
