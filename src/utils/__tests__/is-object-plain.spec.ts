/**
 * @file Unit Tests - isObjectPlain
 * @module tutils/utils/tests/unit/isObjectPlain
 */

import testSubject from '../is-object-plain'

describe('unit:utils/isObjectPlain', () => {
  it('should return false if value is not plain object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.datatype.array()],
      [new Date()],
      [null]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is plain object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [{ x: 0, y: 0 }],
      [Object.create(null)]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
