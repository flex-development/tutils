/**
 * @file Unit Tests - isDate
 * @module tutils/utils/tests/unit/isDate
 */

import testSubject from '../is-date'

describe('unit:utils/isDate', () => {
  it('should return false if value is not Date instance', () => {
    expect(testSubject(faker.date.anytime().toISOString())).to.be.false
  })

  it('should return true if value is Date instance', () => {
    expect(testSubject(faker.date.anytime())).to.be.true
  })
})
