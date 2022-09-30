/**
 * @file Unit Tests - isEmptyString
 * @module tutils/guards/tests/unit/isEmptyString
 */

import type { TestcaseFn } from '#tests/interfaces'
import testSubject from '../is-empty-string'

describe('unit:guards/isEmptyString', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [[]] },
    { expected: false, parameters: [{}] },
    { expected: false, parameters: [13] },
    { expected: false, parameters: [false] },
    { expected: false, parameters: ['hello world'] },
    { expected: true, parameters: [''] },
    { expected: true, parameters: ['   '] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
