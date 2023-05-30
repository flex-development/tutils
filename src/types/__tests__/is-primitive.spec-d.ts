/**
 * @file Type Tests - IsPrimitive
 * @module tutils/types/tests/unit-d/IsPrimitive
 */

import type TestSubject from '../is-primitive'
import type OneOrMany from '../one-or-many'
import type Primitive from '../primitive'

describe('unit-d:types/IsPrimitive', () => {
  it('should equal false if [T] does not extend [Primitive]', () => {
    expectTypeOf<TestSubject<Date>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<OneOrMany<Primitive>>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [Primitive]', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<true>()
  })
})
