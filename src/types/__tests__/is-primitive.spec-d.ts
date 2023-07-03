/**
 * @file Type Tests - IsPrimitive
 * @module tutils/types/tests/unit-d/IsPrimitive
 */

import type TestSubject from '../is-primitive'
import type JsonPrimitive from '../json-primitive'
import type OneOrMany from '../one-or-many'
import type Primitive from '../primitive'

describe('unit-d:types/IsPrimitive', () => {
  it('should equal false if T does not extend Primitive', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends Primitive', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<JsonPrimitive>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<OneOrMany<string>>>().toEqualTypeOf<boolean>()
      expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<true>()
    })
  })
})
