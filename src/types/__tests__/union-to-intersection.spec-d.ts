/**
 * @file Type Tests - UnionToIntersection
 * @module tutils/types/tests/unit-d/UnionToIntersection
 */

import type TestSubject from '../union-to-intersection'

describe('unit-d:types/UnionToIntersection', () => {
  it('should convert T to intersection if T is a union', () => {
    // Arrange
    type T = { x: 0 } | { x: 1 }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ x: 0 } & { x: 1 }>()
  })

  it('should equal T if T is not a union', () => {
    expectTypeOf<TestSubject<any>>().toBeAny()
    expectTypeOf<TestSubject<number>>().toBeNumber()
    expectTypeOf<TestSubject<unknown>>().toBeUnknown()
  })

  it('should equal unknown if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeUnknown()
  })
})
