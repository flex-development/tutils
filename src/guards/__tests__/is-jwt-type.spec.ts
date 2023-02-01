/**
 * @file Unit Tests - isJwtType
 * @module tutils/guards/tests/unit/isJwtType
 */

import { JwtType } from '#src/enums'
import testSubject from '../is-jwt-type'

describe('unit:guards/isJwtType', () => {
  it('should return false if value is not JwtType', () => {
    expect(testSubject(faker.string.sample())).to.be.false
  })

  it('should return true if value is JwtType', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [JwtType.ACCESS],
      [JwtType.REFRESH],
      [JwtType.VERIFICATION]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
