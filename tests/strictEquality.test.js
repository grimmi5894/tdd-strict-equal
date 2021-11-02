const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEquality')

describe('strictEquality', () => {
  describe('strictEqual', () => {
    it('returns true when parameters are of same type and same value', () => {
      const val1 = 5
      const val2 = 5
      const result = strictEqual(val1, val2)

      expect(result).to.equal(true)
    })
  })
})
