/**
 * @file Type Tests - IsEqual
 * @module tutils/types/tests/unit-d/IsEqual
 */

import type TestSubject from '../is-equal'

describe('unit-d:types/IsEqual', () => {
  it('should equal false A and B are not equal', () => {
    expectTypeOf<TestSubject<0, 1>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<20, { limit: 20 }>>().toEqualTypeOf<false>()
  })

  it('should equal true if A and B are equal', () => {
    expectTypeOf<TestSubject<13, 13>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<[1, 2], [1, 2]>>().toEqualTypeOf<true>()
  })
})
