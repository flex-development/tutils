import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-empty-string.guard'

/**
 * @file Unit Tests - isEmptyString
 * @module tutils/guards/tests/unit/isEmptyString
 */

describe('unit:guards/isEmptyString', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'array', value: [] },
    { expected: false, state: 'boolean', value: false },
    { expected: false, state: 'non-empty string', value: 'string value' },
    { expected: false, state: 'number', value: 13 },
    { expected: false, state: 'object', value: { data: 26 } },
    { expected: true, state: 'empty string (trimmed)', value: '' },
    { expected: true, state: 'empty string (untrimmed)', value: '   ' }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
