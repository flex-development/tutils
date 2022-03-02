import type { Testcase } from '@tests/utils/types'
import JwtType from '@tutils/enums/jwt-type.enum'
import testSubject from '../is-jwt-type.guard'

/**
 * @file Unit Tests - isJwtType
 * @module tutils/guards/tests/unit/isJwtType
 */

describe('unit:guards/isJwtType', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'random string', value: 'a-random-string' },
    { expected: true, state: 'JwtType.ACCESS', value: JwtType.ACCESS },
    { expected: true, state: 'JwtType.VERIFICATION', value: JwtType.REFRESH },
    {
      expected: true,
      state: 'JwtType.VERIFICATION',
      value: JwtType.VERIFICATION
    }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
