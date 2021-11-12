import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-booleanish.guard'

/**
 * @file Unit Tests - isBooleanish
 * @module tutils/guards/tests/unit/isBooleanish
 */

describe('unit:guards/isBooleanish', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'array', value: [] },
    { expected: false, state: 'number', value: 13 },
    { expected: false, state: 'object', value: { data: 26 } },
    { expected: true, state: 'boolean', value: false },
    { expected: true, state: "'false'", value: 'false' },
    { expected: true, state: "'true'", value: 'true' }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
