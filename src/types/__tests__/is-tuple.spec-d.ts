/**
 * @file Type Tests - IsTuple
 * @module tutils/types/tests/unit-d/IsTuple
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type TestSubject from '../is-tuple'
import type Nilable from '../nilable'

describe('unit-d:types/IsTuple', () => {
  it('should equal false if T does not extend a tuple', () => {
    expectTypeOf<TestSubject<readonly unknown[]>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends a tuple', () => {
    expectTypeOf<TestSubject<[Vehicle]>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<EmptyArray>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<readonly [Vehicle?]>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<['vin', Vehicle['vin']]>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<boolean>()
    })
  })
})
