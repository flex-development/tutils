import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-nil.guard'

/**
 * @file Unit Tests - isNIL
 * @module tutils/guards/tests/unit/isNIL
 */

describe('unit:guards/isNIL', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'boolean', value: true },
    { expected: false, state: 'number', value: 13 },
    { expected: false, state: 'object', value: { data: 26 } },
    { expected: false, state: 'string', value: 'string' },
    { expected: true, state: 'null', value: null },
    { expected: true, state: 'undefined', value: undefined }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
