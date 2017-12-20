var tape = require('tape')
var clock = require('./')

tape('digital clock', function (t) {
  t.test('time should be correct', function (t) {
    t.plan(8)
    t.equal(clock(-1), '0:00')
    t.equal(clock('foobar'), '0:00')
    t.equal(clock(0), '0:00')
    t.equal(clock(60), '1:00')
    t.equal(clock(600), '10:00')
    t.equal(clock(1260), '21:00')
    t.equal(clock(3600), '60:00')
    t.equal(clock(7201), '120:01')
    t.end()
  })
})
