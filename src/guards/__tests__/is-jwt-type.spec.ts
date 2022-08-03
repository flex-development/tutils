/**
 * @file Unit Tests - isJwtType
 * @module tutils/guards/tests/unit/isJwtType
 */

import JwtType from 'src/enums/jwt-type'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-jwt-type'

describe('unit:guards/isJwtType', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['EMAIL'] },
    { expected: true, parameters: [JwtType.ACCESS] },
    { expected: true, parameters: [JwtType.REFRESH] },
    { expected: true, parameters: [JwtType.VERIFICATION] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
