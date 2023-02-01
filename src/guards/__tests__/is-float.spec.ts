/**
 * @file Unit Tests - isFloat
 * @module tutils/guards/tests/unit/isFloat
 */

import FLOAT from '#fixtures/float'
import INT from '#fixtures/int'
import testSubject from '../is-float'

describe('unit:guards/isFloat', () => {
  it('should return false if value is not a float', () => {
    expect(testSubject(INT)).to.be.false
  })

  it('should return true if value is a float', () => {
    expect(testSubject(FLOAT)).to.be.true
  })
})
