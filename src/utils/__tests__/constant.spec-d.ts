/**
 * @file Type Tests - constant
 * @module tutils/utils/tests/unit-d/constant
 */

import type { EmptyArray, Fn } from '#src/types'
import type testSubject from '../constant'

describe('unit-d:utils/constant', () => {
  it('should return Fn<EmptyArray, T>', () => {
    // Arrange
    type T = true
    type Expect = Fn<EmptyArray, T>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Expect>()
  })
})
