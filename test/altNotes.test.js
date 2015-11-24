var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.altNotes').addBatch({
  'major': function () {
    assert.deepEqual(key.altNotes('C'), [])
    assert.deepEqual(key.altNotes('F major'), ['Bb'])
    assert.deepEqual(key.altNotes('A major'), ['F#', 'C#', 'G#'])
    assert.deepEqual(key.altNotes('Eb major'), ['Bb', 'Eb', 'Ab'])
  },
  'invalid': function () {
    assert.deepEqual(key.altNotes('major'), null)
    assert.deepEqual(key.altNotes('C blah'), null)
  }
}).export(module)
