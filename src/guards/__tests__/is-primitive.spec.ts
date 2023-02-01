/**
 * @file Unit Tests - isPrimitive
 * @module tutils/guards/tests/unit/isPrimitive
 */

import testSubject from '../is-primitive'

describe('unit:guards/isPrimitive', () => {
  it('should return false if value is not primitive value', () => {
    expect(testSubject(faker.datatype.array())).to.be.false
  })

  it('should return true if value is primitive value', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [Symbol('is-primitive')],
      [faker.number.bigInt()],
      [faker.string.uuid()],
      [undefined]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
