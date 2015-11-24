var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.signature').addBatch({
  'major': function () {
    assert.deepEqual(key.signature('F major'), 'b')
    assert.deepEqual(key.signature('A major'), '###')
    assert.deepEqual(key.signature('Eb major'), 'bbb')
  },
  'invalid': function () {
    assert.equal(key.signature('c Blah'), null)
    assert.equal(key.signature('minor'), null)
  }
}).export(module)
