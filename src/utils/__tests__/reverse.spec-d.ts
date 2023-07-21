/**
 * @file Type Tests - reverse
 * @module tutils/utils/tests/unit-d/reverse
 */

import type { Reverse } from '#src/types'
import type testSubject from '../reverse'

describe('unit-d:utils/reverse', () => {
  it('should return Reverse<T>', () => {
    // Arrange
    type T = readonly ['z', 'y', 'x']

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Reverse<T>>()
  })
})
