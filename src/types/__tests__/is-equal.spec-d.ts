/**
 * @file Type Tests - IsEqual
 * @module tutils/types/tests/unit-d/IsEqual
 */

import type TestSubject from '../is-equal'

describe('unit-d:types/IsEqual', () => {
  it('should equal false A and B are not equal', () => {
    expectTypeOf<TestSubject<0, false>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<1 | 3, 3 | 13>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<['a'], readonly ['a']>>().toEqualTypeOf<false>()
  })

  it('should equal true if A and B are equal', () => {
    expectTypeOf<TestSubject<3 | 13, 3 | 13>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<['a', 'b'?], ['a', 'b'?]>>().toEqualTypeOf<true>()
  })
})
