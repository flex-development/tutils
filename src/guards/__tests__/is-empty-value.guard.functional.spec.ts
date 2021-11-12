import type { Testcase } from '@tests/utils/types'
import * as isEmptyString from '../is-empty-string.guard'
import testSubject from '../is-empty-value.guard'
import * as isNIL from '../is-nil.guard'

/**
 * @file Unit Tests - isEmptyValue
 * @module tutils/guards/tests/unit/isEmptyValue
 */

describe('unit:guards/isEmptyValue', () => {
  const spyIsEmptyString = jest.spyOn(isEmptyString, 'default')
  const spyIsNIL = jest.spyOn(isNIL, 'default')

  type Case = Testcase<{ isEmptyString: number; isNIL: number }> & {
    state: string
    value: any
  }

  const cases: Case[] = [
    {
      expected: { isEmptyString: 1, isNIL: 1 },
      state: 'undefined',
      value: undefined
    },
    {
      expected: { isEmptyString: 1, isNIL: 0 },
      state: 'empty string (trimmed)',
      value: ''
    },
    {
      expected: { isEmptyString: 1, isNIL: 0 },
      state: 'empty string (untrimmed)',
      value: '   '
    },
    {
      expected: { isEmptyString: 1, isNIL: 1 },
      state: 'null',
      value: null
    },
    {
      expected: { isEmptyString: 1, isNIL: 1 },
      state: 'undefined',
      value: undefined
    }
  ]

  for (const { expected, state, value } of cases) {
    const times = (num: number) => `${num} time${num === 1 ? '' : 's'}`
    const state1 = `isEmptyString ${times(expected.isEmptyString)}`
    const state2 = `isNIL ${times(expected.isNIL)}`

    it(`should call ${state1} and ${state2} given ${state}`, () => {
      // Act
      testSubject(value)

      // Expect
      expect(spyIsEmptyString).toBeCalledTimes(expected.isEmptyString)
      expect(spyIsNIL).toBeCalledTimes(expected.isNIL)
    })
  }
})
