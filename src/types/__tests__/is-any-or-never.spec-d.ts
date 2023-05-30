/**
 * @file Type Tests - IsAnyOrNever
 * @module tutils/types/tests/unit-d/IsAnyOrNever
 */

import type TestSubject from '../is-any-or-never'
import type Primitive from '../primitive'

describe('unit-d:types/IsAnyOrNever', () => {
  it('should equal false if T is not any or never', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<true>()
  })

  it('should equal true if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<true>()
  })
})
