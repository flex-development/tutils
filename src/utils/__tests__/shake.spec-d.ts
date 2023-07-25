/**
 * @file Type Tests - shake
 * @module tutils/utils/tests/unit-d/shake
 */

import type { Shake } from '#src/types'
import type testSubject from '../shake'

describe('unit-d:utils/shake', () => {
  it('should return Shake<T, F>', () => {
    // Arrange
    type T = { x: number; y: null }
    type F = null
    type Expect = Shake<T, F>

    // Expect
    expectTypeOf<typeof testSubject<T, F>>().returns.toEqualTypeOf<Expect>()
  })
})
