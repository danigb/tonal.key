'use strict'

var split = require('tonal.gamut/split')
var rtc = require('tonal.notation/roman.coord')
var itc = require('tonal.notation/interval.coord')
var parse = require('./parse')
var chords = require('./chords')
var scale = require('./scale')

/**
 * Get a chord progression from within a key
 *
 * @name key.progression
 * @function
 * @param {String|Array} numerals - the roman numerals
 * @param {String} key - the key name
 */
module.exports = function (numerals, key) {
  var k = parse(key)
  if (!k || !k.tonic) return null
  var s = scale(k.mode).map(itc)
  var c = chords(key)
  var degrees = split(numerals).map(rtc)
  return degrees.map(function (d) {
    var i = indexOf(d[0], s)
    return i < 0 ? null : c[i]
  })
}

function indexOf (v, s) {
  for (var i = 0; i < 7; i++) {
    if (s[i][0] === v) return i
  }
  return -1
}
