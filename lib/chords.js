'use strict'

var scale = require('./scale')
var chord = require('tonal.scale/chord')
var modes = require('tonal.scale/modes')

/**
 * Get chords of a key
 *
 * @name key.chords
 * @function
 * @param {String} name - the key name
 * @return {Array} an array with the key chords
 *
 * @example
 * key.chords('C major') // => ['C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo'
 * key.chords('major', false) // => ['C', 'Dm', ...]
 */
module.exports = function (k) {
  return modes(scale(k)).map(function (s) {
    return chord(s)
  })
}
