import type { Testcase } from '@tests/utils/types'
import NodeEnv from '@tutils/enums/node-env.enum'
import testSubject from '../is-node-env.guard'

/**
 * @file Unit Tests - isNodeEnv
 * @module tutils/guards/tests/unit/isNodeEnv
 */

describe('unit:guards/isNodeEnv', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'keyof NodeEnv', value: 'DEV' },
    { expected: false, state: 'random string', value: 'random-string' },
    { expected: true, state: 'NodeEnv.DEV', value: NodeEnv.DEV },
    { expected: true, state: 'NodeEnv.PROD', value: NodeEnv.PROD },
    { expected: true, state: 'NodeEnv.TEST', value: NodeEnv.TEST }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
