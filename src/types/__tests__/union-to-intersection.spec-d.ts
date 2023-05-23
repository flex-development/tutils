/**
 * @file Type Tests - UnionToIntersection
 * @module tutils/types/tests/unit-d/UnionToIntersection
 */

import type TestSubject from '../union-to-intersection'

describe('unit-d:types/UnionToIntersection', () => {
  it('should convert U to intersection', () => {
    // Arrange
    type U1 = number
    type U2 = { first_name: string } | { last_name: string }
    type E1 = U1
    type E2 = { first_name: string } & { last_name: string }

    expectTypeOf<TestSubject<U1>>().toEqualTypeOf<E1>()
    expectTypeOf<TestSubject<U2>>().toEqualTypeOf<E2>()
  })
})
