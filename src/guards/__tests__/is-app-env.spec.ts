/**
 * @file Unit Tests - isAppEnv
 * @module tutils/guards/tests/unit/isAppEnv
 */

import AppEnv from '#src/enums/app-env'
import type { TestcaseFn } from '#tests/interfaces'
import testSubject from '../is-app-env'

describe('unit:guards/isAppEnv', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['cd'] },
    { expected: false, parameters: ['PROD'] },
    { expected: true, parameters: [AppEnv.CI] },
    { expected: true, parameters: [AppEnv.DEV] },
    { expected: true, parameters: [AppEnv.STG] },
    { expected: true, parameters: [AppEnv.PROD] },
    { expected: true, parameters: [AppEnv.TEST] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
