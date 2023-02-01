/**
 * @file Unit Tests - isBigInt
 * @module tutils/guards/tests/unit/isBigInt
 */

import testSubject from '../is-big-int'

describe('unit:guards/isBigInt', () => {
  it('should return false if value is not bigint primitive', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.number.float()],
      [faker.number.int()],
      [faker.string.uuid()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is bigint primitive', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [BigInt('0x1fffffffffffff')],
      [faker.number.bigInt()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
