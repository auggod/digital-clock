var leftPad = require('left-pad')

module.exports = secondsToMinutesAndSeconds

/*
 * Convert seconds in digital format
 * @example
 * returns 01:29
 * secondsToMinutesAndSeconds(89);
 * @param {Number} duration The total duration in seconds
 * @returns {String} Returns digital time in minutes and seconds
 */

function secondsToMinutesAndSeconds (duration) {
  var d = parseFloat(duration, 10)

  if (d < 0 || isNaN(d)) return '0:00'

  var mm = Math.floor(d / 60)
  var ss = Math.floor(d - mm * 60)
  return mm + ':' + leftPad(ss, 2, '0')
}
