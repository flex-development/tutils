/**
 * @file Type Tests - desegment
 * @module tutils/utils/tests/unit-d/desegment
 */

import type { Dot, Join, Nilable } from '#src/types'
import type testSubject from '../desegment'

describe('unit-d:utils/desegment', () => {
  it('should return Join<T, Dot>', () => {
    // Arrange
    type T = Nilable<['hello', 'world']>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Join<T, Dot>>()
  })
})
