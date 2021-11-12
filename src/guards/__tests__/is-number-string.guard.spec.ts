import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-number-string.guard'

/**
 * @file Unit Tests - isNumberString
 * @module tutils/guards/tests/unit/isNumberString
 */

describe('unit:guards/isNumberString', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'array', value: [] },
    { expected: false, state: 'boolean', value: true },
    { expected: false, state: 'object', value: {} },
    { expected: true, state: 'number', value: 13 },
    { expected: true, state: 'string', value: 'string' }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
