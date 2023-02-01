/**
 * @file Unit Tests - isUndefined
 * @module tutils/guards/tests/unit/isUndefined
 */

import testSubject from '../is-undefined'

describe('unit:guards/isUndefined', () => {
  it('should return false if value is not undefined', () => {
    expect(testSubject(faker.datatype.array())).to.be.false
  })

  it('should return true if value is undefined', () => {
    expect(testSubject(undefined)).to.be.true
  })
})
