/**
 * @file Unit Tests - isJsonPrimitive
 * @module tutils/utils/tests/unit/isJsonPrimitive
 */

import testSubject from '../is-json-primitive'

describe('unit:utils/isJsonPrimitive', () => {
  it('should return false if value is not JSON primitive', () => {
    expect(testSubject([faker.string.nanoid()])).to.be.false
  })

  it('should return true if value is JSON primitive', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.datatype.boolean()],
      [faker.number.int()],
      [faker.string.uuid()],
      [null]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
