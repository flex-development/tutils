/**
 * @file Type Tests - IsNumber
 * @module tutils/types/tests/unit-d/IsNumber
 */

import type Float from '../float'
import type Integer from '../integer'
import type TestSubject from '../is-number'
import type Nilable from '../nilable'
import type Timestamp from '../timestamp'

describe('unit-d:types/IsNumber', () => {
  it('should equal false if T does not extend number', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends number', () => {
    expectTypeOf<TestSubject<Float>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Integer>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Timestamp<'unix'>>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<number>>>().toEqualTypeOf<boolean>()
    })
  })
})
