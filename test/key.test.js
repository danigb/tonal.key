var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.relative').addBatch({
  'by name': function () {
    assert.equal(key('c'), 'C major')
    assert.equal(key('c MAJOR'), 'C major')
  },
  'by signature': function () {
    assert.equal(key('#'), 'G major')
    assert.equal(key('###'), 'A major')
    assert.equal(key('bbb'), 'Eb major')
  },
  'by alterations': function () {
    assert.equal(key(1), 'G major')
    assert.equal(key(3), 'A major')
    assert.equal(key(-3), 'Eb major')
  }
}).export(module)
