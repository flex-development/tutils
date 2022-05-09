/**
 * @file Unit Tests - isNumberString
 * @module tutils/guards/tests/unit/isNumberString
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-number-string.guard'

describe('unit:guards/isNumberString', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [[]] },
    { expected: false, parameters: [{}] },
    { expected: false, parameters: [true] },
    { expected: false, parameters: [false] },
    { expected: true, parameters: [13] },
    { expected: true, parameters: ['hello world'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
