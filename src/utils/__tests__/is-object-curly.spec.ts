/**
 * @file Unit Tests - isObjectCurly
 * @module tutils/utils/tests/unit/isObjectCurly
 */

import testSubject from '../is-object-curly'

describe('unit:utils/isObjectCurly', () => {
  it('should return false if value is not curly-braced object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
      [faker.string.hexadecimal({ length: 24 })],
      [vi.fn()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is curly-braced object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.date.anytime()],
      [{ email: faker.internet.email() }]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
