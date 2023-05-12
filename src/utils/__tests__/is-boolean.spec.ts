/**
 * @file Unit Tests - isBoolean
 * @module tutils/utils/tests/unit/isBoolean
 */

import testSubject from '../is-boolean'

describe('unit:utils/isBoolean', () => {
  it('should return false if value is not a boolean', () => {
    expect(testSubject(faker.number.int())).to.be.false
  })

  it('should return true if value is a boolean', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [[false], [true]]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
