/**
 * @file Type Tests - NaturalRange
 * @module tutils/types/tests/unit-d/NaturalRange
 */

import type TestSubject from '../range-natural'

describe('unit-d:types/NaturalRange', () => {
  it('should equal union of numbers in the range [Acc["length"],Max)', () => {
    // Arrange
    type Max = 3

    // Expect
    expectTypeOf<TestSubject<Max>>().toEqualTypeOf<0 | 1 | 2>()
    expectTypeOf<TestSubject<Max, [1]>>().toEqualTypeOf<1 | 2>()
  })
})
