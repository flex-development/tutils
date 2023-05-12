/**
 * @file Unit Tests - isFunction
 * @module tutils/utils/tests/unit/isFunction
 */

import testSubject from '../is-function'

describe('unit:utils/isFunction', () => {
  it('should return false if value is not a function', () => {
    expect(testSubject(faker.datatype.boolean())).to.be.false
  })

  it('should return true if value is a function', () => {
    expect(testSubject(vi.fn())).to.be.true
  })
})
