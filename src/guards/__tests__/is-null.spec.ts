/**
 * @file Unit Tests - isNull
 * @module tutils/guards/tests/unit/isNull
 */

import testSubject from '../is-null'

describe('unit:guards/isNull', () => {
  it('should return false if value is not null', () => {
    expect(testSubject(faker.datatype.datetime())).to.be.false
  })

  it('should return true if value is null', () => {
    expect(testSubject(null)).to.be.true
  })
})
