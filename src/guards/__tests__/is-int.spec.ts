/**
 * @file Unit Tests - isInt
 * @module tutils/guards/tests/unit/isInt
 */

import FLOAT from '#fixtures/float'
import INT from '#fixtures/int'
import testSubject from '../is-int'

describe('unit:guards/isInt', () => {
  it('should return false if value is not an integer', () => {
    expect(testSubject(FLOAT)).to.be.false
  })

  it('should return true if value is an integer', () => {
    expect(testSubject(INT)).to.be.true
  })
})
