var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.chords').addBatch({
  'chords of major': function () {
    assert.deepEqual(key.chords('C major'), [ 'CM', 'Dm', 'Em', 'FM', 'G7', 'Am', 'Bdim' ])
    assert.deepEqual(key.chords('Bb major'), ['BbM', 'Cm', 'Dm', 'EbM', 'F7', 'Gm', 'Adim'])
  },
  'chords of minor': function () {
    assert.deepEqual(key.chords('E minor'), ['Em', 'F#dim', 'GM', 'Am', 'Bm', 'CM', 'D7'])
  }
}).export(module)
