/**
 * @file Unit Tests - equal
 * @module tutils/utils/tests/unit/equal
 */

import INTEGER from '#fixtures/integer'
import testSubject from '../equal'

describe('unit:utils/equal', () => {
  it('should return false if a and b are not deeply equal', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [{}, { value: faker.number.int() }],
      [[], [faker.number.int(), faker.number.int(), faker.number.int()]],
      [INTEGER, INTEGER * -1],
      [faker.date.future(), faker.date.past()]
    ]

    // Act + Expect
    cases.forEach(([a, b]) => expect(testSubject(a, b)).to.be.false)
  })

  it('should return true if a and b are deeply equal', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [{ value: INTEGER }, { value: INTEGER }],
      [[INTEGER], [INTEGER]],
      [INTEGER, INTEGER]
    ]

    // Act + Expect
    cases.forEach(([a, b, identity]) => {
      expect(testSubject(a, b, identity)).to.be.true
    })
  })
})
