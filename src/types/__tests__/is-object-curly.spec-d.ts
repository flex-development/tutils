/**
 * @file Type Tests - IsObjectCurly
 * @module tutils/types/tests/unit-d/IsObjectCurly
 */

import type Book from '#fixtures/book.interface'
import type Vehicle from '#fixtures/vehicle'
import type EmptyObject from '../empty-object'
import type TestSubject from '../is-object-curly'
import type Nilable from '../nilable'

describe('unit-d:types/IsObjectCurly', () => {
  it('should equal false if T does not extend ObjectCurly', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends ObjectCurly', () => {
    expectTypeOf<TestSubject<Book>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Vehicle>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Vehicle>>>().toEqualTypeOf<boolean>()
    })
  })
})
