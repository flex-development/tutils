/**
 * @file Type Tests - flat
 * @module tutils/utils/tests/unit-d/flat
 */

import type { Flat } from '#src/types'
import type testSubject from '../flat'

describe('unit-d:utils/flat', () => {
  it('should return Flat<T, D>', () => {
    // Arrange
    type T = readonly [1, [2, [3, 4], 5]]
    type D = 2

    // Expect
    expectTypeOf<typeof testSubject<T, D>>().returns.toEqualTypeOf<Flat<T, D>>()
  })
})
