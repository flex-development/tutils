/**
 * @file Unit Tests - isArrayIndex
 * @module tutils/utils/tests/unit/isArrayIndex
 */

import DOT from '../dot'
import testSubject from '../is-array-index'

describe('unit:utils/isArrayIndex', () => {
  it('should return false if value is not an array index', () => {
    expect(testSubject(DOT)).to.be.false
  })

  it('should return true if value is an array index', () => {
    expect(testSubject(`${faker.number.int({ max: 13, min: 0 })}`)).to.be.true
  })
})
