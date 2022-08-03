/**
 * @file Unit Tests - isNodeEnv
 * @module tutils/guards/tests/unit/isNodeEnv
 */

import NodeEnv from 'src/enums/node-env'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-node-env'

describe('unit:guards/isNodeEnv', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['ci'] },
    { expected: false, parameters: ['DEV'] },
    { expected: true, parameters: [NodeEnv.DEV] },
    { expected: true, parameters: [NodeEnv.PROD] },
    { expected: true, parameters: [NodeEnv.TEST] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
