/**
 * @file Functional Tests - select
 * @module tutils/utils/tests/functional/select
 */

import type { Predicate } from '#src/types'
import testSubject from '../select'

describe('functional:utils/select', () => {
  let array: number[]
  let filter: Predicate<[number]>

  beforeAll(() => {
    array = [0, 1, 2, 3, 4, 5]
    filter = (n: number): boolean => n >= 3
  })

  it('should filter array', () => {
    expect(testSubject(array, filter)).to.eql([3, 4, 5])
  })

  it('should map filtered array', () => {
    expect(testSubject(array, filter, (n: number) => n * n)).to.eql([9, 16, 25])
  })
})
