/**
 * @file Unit Tests - isFloat
 * @module tutils/guards/tests/unit/isFloat
 */

import testSubject from '../is-float'

describe('unit:guards/isFloat', () => {
  it('should return false if value is not a float', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.number.bigInt()],
      [faker.number.hex()],
      [faker.number.int()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is a float', () => {
    expect(testSubject(faker.number.float())).to.be.true
  })
})
