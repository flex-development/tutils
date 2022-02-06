import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-number-string.guard'

/**
 * @file Unit Tests - isUnixTimestamp
 * @module tutils/guards/tests/unit/isUnixTimestamp
 */

describe('unit:guards/isUnixTimestamp', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'non-number value', value: null },
    { expected: true, state: 'unix timestamp', value: Date.now() }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
