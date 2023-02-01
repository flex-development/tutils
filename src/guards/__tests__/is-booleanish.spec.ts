/**
 * @file Unit Tests - isBooleanish
 * @module tutils/guards/tests/unit/isBooleanish
 */

import testSubject from '../is-booleanish'

describe('unit:guards/isBooleanish', () => {
  it('should return false if value is not booleanish', () => {
    expect(testSubject(faker.number.int())).to.be.false
  })

  it('should return true if value is booleanish', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [false],
      [true],
      ['false'],
      ['true']
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
