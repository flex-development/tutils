/**
 * @file Unit Tests - isInteger
 * @module tutils/utils/tests/unit/isInteger
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import testSubject from '../is-integer'

describe('unit:utils/isInteger', () => {
  it('should return false if value is not an integer', () => {
    expect(testSubject(FLOAT)).to.be.false
  })

  it('should return true if value is an integer', () => {
    expect(testSubject(INTEGER)).to.be.true
    expect(testSubject(INTEGER * 0)).to.be.true
    expect(testSubject(INTEGER * -1)).to.be.true
  })
})
