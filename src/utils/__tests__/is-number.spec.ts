/**
 * @file Unit Tests - isNumber
 * @module tutils/utils/tests/unit/isNumber
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import testSubject from '../is-number'

describe('unit:utils/isNumber', () => {
  it('should return false if value is not a number', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[INTEGER]],
      [Symbol('is-number')],
      [faker.string.numeric()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is a number', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [FLOAT],
      [INTEGER],
      [Number.NaN]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
