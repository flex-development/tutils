/**
 * @file Functional Tests - isEmptyValue
 * @module tutils/guards/tests/functional/isEmptyValue
 */

import type { Testcase } from '@tests/interfaces'
import * as isEmptyString from '../is-empty-string.guard'
import testSubject from '../is-empty-value.guard'
import * as isNIL from '../is-nil.guard'

describe('functional:guards/isEmptyValue', () => {
  interface Case extends Testcase<{ isEmptyString: number; isNIL: number }> {
    parameters: Parameters<typeof testSubject>
  }

  const cases: Case[] = [
    { expected: { isEmptyString: 1, isNIL: 0 }, parameters: [''] },
    { expected: { isEmptyString: 1, isNIL: 0 }, parameters: ['   '] },
    { expected: { isEmptyString: 1, isNIL: 1 }, parameters: [null] },
    { expected: { isEmptyString: 1, isNIL: 1 }, parameters: [undefined] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const times = (num: number) => `${num} time${num === 1 ? '' : 's'}`
    const fn1 = `isEmptyString ${times(expected.isEmptyString)}`
    const fn2 = `isNIL ${times(expected.isNIL)}`
    const functions = `${fn1} and ${fn2}`

    it(`should call ${functions} given ${pf(parameters)}`, function (this) {
      // Arrange
      const spy_isEmptyString = this.sandbox.spy(isEmptyString, 'default')
      const spy_isNIL = this.sandbox.spy(isNIL, 'default')

      // Act
      testSubject(...parameters)

      // Expect
      expect(spy_isEmptyString).to.have.callCount(expected.isEmptyString)
      expect(spy_isNIL).to.have.callCount(expected.isNIL)
    })
  })
})
