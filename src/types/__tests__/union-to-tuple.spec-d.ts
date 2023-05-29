/**
 * @file Type Tests - UnionToTuple
 * @module tutils/types/tests/unit-d/UnionToTuple
 */

import type TestSubject from '../union-to-tuple'

describe('unit-d:types/UnionToTuple', () => {
  it('should convert U to tuple', () => {
    // Arrange
    type U = 'x' | 'y' | 'z'

    // Expect
    expectTypeOf<TestSubject<U>>().toEqualTypeOf<['x', 'y', 'z']>()
  })
})
