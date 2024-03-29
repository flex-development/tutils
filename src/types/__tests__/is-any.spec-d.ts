/**
 * @file Type Tests - IsAny
 * @module tutils/types/tests/unit-d/IsAny
 */

import type TestSubject from '../is-any'
import type Primitive from '../primitive'

describe('unit-d:types/IsAny', () => {
  it('should equal false if T is not any', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<true>()
  })
})
