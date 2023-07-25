/**
 * @file Type Tests - range
 * @module tutils/utils/tests/unit-d/range
 */

import type testSubject from '../range'

describe('unit-d:utils/range', () => {
  it('should return Generator<T, void, void>', () => {
    // Arrange
    type T = number
    type Expect = Generator<T, void, void>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Expect>()
  })
})
