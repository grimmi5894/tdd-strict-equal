const strictEqual = (val1, val2) => {
  return Object.is(val1, val2)
}

module.exports = strictEqual
