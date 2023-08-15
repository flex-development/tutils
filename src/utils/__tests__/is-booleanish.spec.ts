/**
 * @file Unit Tests - isBooleanish
 * @module tutils/utils/tests/unit/isBooleanish
 */

import testSubject from '../is-booleanish'

describe('unit:utils/isBooleanish', () => {
  it('should return false if value is not booleanish', () => {
    expect(testSubject(faker.number.int({ min: 3 }))).to.be.false
  })

  it('should return true if value is booleanish', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      ['0'],
      ['1'],
      ['false'],
      ['n'],
      ['true'],
      ['y'],
      [0],
      [1],
      [false],
      [true]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
