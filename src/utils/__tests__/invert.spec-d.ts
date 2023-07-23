/**
 * @file Type Tests - invert
 * @module tutils/utils/tests/unit-d/invert
 */

import type { Invert } from '#src/types'
import type testSubject from '../invert'

describe('unit-d:utils/invert', () => {
  it('should return Invert<T>', () => {
    // Arrange
    type T = { readonly 0: 'a'; 1: 'b'; 2: 'c'; 3?: 'd'; 4?: 'e' }

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Invert<T>>()
  })
})
