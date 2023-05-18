/**
 * @file Unit Tests - isNull
 * @module tutils/utils/tests/unit/isNull
 */

import testSubject from '../is-null'

describe('unit:utils/isNull', () => {
  it('should return false if value is not null', () => {
    expect(testSubject(faker.date.anytime())).to.be.false
  })

  it('should return true if value is null', () => {
    expect(testSubject(null)).to.be.true
  })
})
