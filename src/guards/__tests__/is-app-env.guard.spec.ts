import type { Testcase } from '@tests/utils/types'
import AppEnv from '@tutils/enums/app-env.enum'
import testSubject from '../is-app-env.guard'

/**
 * @file Unit Tests - isAppEnv
 * @module tutils/guards/tests/unit/isAppEnv
 */

describe('unit:guards/isAppEnv', () => {
  type Case = Testcase<boolean> & { state: string; value: any }

  const cases: Case[] = [
    { expected: false, state: 'keyof AppEnv', value: 'PROD' },
    { expected: false, state: 'random string', value: 'some-random-string' },
    { expected: true, state: 'AppEnv.DEV', value: AppEnv.DEV },
    { expected: true, state: 'AppEnv.STG', value: AppEnv.STG },
    { expected: true, state: 'AppEnv.PROD', value: AppEnv.PROD },
    { expected: true, state: 'AppEnv.TEST', value: AppEnv.TEST }
  ]

  it.each<Case>(cases)('should return $expected given $state', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
