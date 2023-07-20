/**
 * @file Type Tests - sift
 * @module tutils/utils/tests/unit-d/sift
 */

import type { NIL, Sift } from '#src/types'
import type testSubject from '../sift'

describe('unit-d:utils/sift', () => {
  it('should return Sift<T>', () => {
    // Arrange
    type T = [number, NIL, number]

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Sift<T>>()
  })
})
