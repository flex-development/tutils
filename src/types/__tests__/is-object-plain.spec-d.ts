/**
 * @file Type Tests - IsObjectPlain
 * @module tutils/types/tests/unit-d/IsObjectPlain
 */

import type Vehicle from '#fixtures/vehicle'
import type EmptyObject from '../empty-object'
import type TestSubject from '../is-object-plain'
import type Nilable from '../nilable'
import type ObjectPlain from '../object-plain'

describe('unit-d:types/IsObjectPlain', () => {
  it('should equal false if T does not extend ObjectPlain', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends ObjectPlain', () => {
    expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<ObjectPlain>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Vehicle>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Vehicle>>>().toEqualTypeOf<boolean>()
    })
  })
})
