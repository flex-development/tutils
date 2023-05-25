/**
 * @file Functional Tests - select
 * @module tutils/utils/tests/functional/select
 */

import type { Fn } from '#src/types'
import testSubject from '../select'

describe('functional:utils/select', () => {
  let array: number[]
  let filter: Fn<[number], boolean>

  beforeAll(() => {
    array = [0, 1, 2, 3, 4, 5]
    filter = (n: number): boolean => n >= 3
  })

  it('should filter array', () => {
    expect(testSubject(array, filter)).to.deep.equal([3, 4, 5])
  })

  it('should map filtered array', () => {
    expect(testSubject(array, filter, (n: number) => n * n)).to.deep.equal([
      9, 16, 25
    ])
  })
})
