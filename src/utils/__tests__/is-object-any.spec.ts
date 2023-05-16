/**
 * @file Unit Tests - isObjectAny
 * @module tutils/utils/tests/unit/isObjectAny
 */

import testSubject from '../is-object-any'

describe('unit:utils/isObjectAny', () => {
  it('should return false if value is not instance object or pojo', () => {
    expect(testSubject(faker.string.hexadecimal({ length: 24 }))).to.be.false
  })

  it('should return true if value is instance object', () => {
    expect(testSubject(faker.date.anytime())).to.be.true
  })

  it('should return true if value is pojo', () => {
    expect(testSubject({ email: faker.internet.email() })).to.be.true
  })
})
