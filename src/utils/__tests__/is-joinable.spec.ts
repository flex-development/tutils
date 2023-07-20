/**
 * @file Unit Tests - isJoinable
 * @module tutils/utils/tests/unit/isJoinable
 */

import VEHICLE from '#fixtures/vehicle'
import DOT from '../dot'
import testSubject from '../is-joinable'

describe('unit:utils/isJoinable', () => {
  it('should return false if value is not joinable', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [[VEHICLE], [Symbol(DOT)]]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is joinable', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.number.bigInt()],
      [faker.datatype.boolean()],
      [faker.number.int()],
      [faker.string.nanoid()],
      [null],
      [undefined]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
