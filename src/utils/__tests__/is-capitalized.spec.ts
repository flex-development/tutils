/**
 * @file Unit Tests - isCapitalized
 * @module tutils/utils/tests/unit/isCapitalized
 */

import testSubject from '../is-capitalized'

describe('unit:utils/isCapitalized', () => {
  it('should return false if value is not capitalized string', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.date.anytime()],
      [faker.person.firstName().toLowerCase()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is capitalized string', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [[''], ['FOO'], ['Foobar']]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
