/**
 * @file Unit Tests - isNumber
 * @module tutils/guards/tests/unit/isNumber
 */

import testSubject from '../is-number'

describe('unit:guards/isNumber', () => {
  it('should return false if value is not a number', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [Symbol('is-number')],
      [Number.NaN],
      [faker.datatype.array()],
      [faker.string.numeric()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is a number', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.number.float()],
      [faker.number.int()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
