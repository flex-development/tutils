/**
 * @file Type Tests - HasKeys
 * @module tutils/types/tests/unit-d/HasKeys
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyObject from '../empty-object'
import type TestSubject from '../has-keys'
import type NIL from '../nil'
import type Primitive from '../primitive'

describe('unit-d:types/HasKeys', () => {
  it('should equal false if IsNever<keyof Objectify<T>> extends true', () => {
    expectTypeOf<TestSubject<NIL>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if IsNever<keyof Objectify<T>> extends false', () => {
    expectTypeOf<TestSubject<Vehicle>>().toEqualTypeOf<true>()
  })

  it('should equal true if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive | Vehicle>>().toEqualTypeOf<boolean>()
    })
  })
})
