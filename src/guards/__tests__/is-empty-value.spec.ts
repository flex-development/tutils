/**
 * @file Unit Tests - isEmptyValue
 * @module tutils/guards/tests/unit/isEmptyValue
 */

import testSubject from '../is-empty-value'

describe('unit:guards/isEmptyValue', () => {
  it('should return false if value is not empty value', () => {
    expect(testSubject(faker.number.bigInt({ min: 13n }))).to.be.false
  })

  it('should return true if value is empty value', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [''],
      [' '],
      [null],
      [undefined]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
