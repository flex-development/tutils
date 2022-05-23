/**
 * @file Unit Tests - isUnixTimestamp
 * @module tutils/guards/tests/unit/isUnixTimestamp
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-number-string.guard'

describe('unit:guards/isUnixTimestamp', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [null] },
    { expected: true, parameters: [Date.now()] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
