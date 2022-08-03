/**
 * @file Unit Tests - isBooleanish
 * @module tutils/guards/tests/unit/isBooleanish
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-booleanish'

describe('unit:guards/isBooleanish', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [[]] },
    { expected: false, parameters: [{}] },
    { expected: false, parameters: [13] },
    { expected: true, parameters: [true] },
    { expected: true, parameters: ['true'] },
    { expected: true, parameters: [false] },
    { expected: true, parameters: ['false'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
