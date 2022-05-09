/**
 * @file Unit Tests - isNIL
 * @module tutils/guards/tests/unit/isNIL
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-nil.guard'

describe('unit:guards/isNIL', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [[]] },
    { expected: false, parameters: [{}] },
    { expected: false, parameters: [13] },
    { expected: false, parameters: [true] },
    { expected: false, parameters: [false] },
    { expected: false, parameters: ['string'] },
    { expected: true, parameters: [null] },
    { expected: true, parameters: [undefined] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
