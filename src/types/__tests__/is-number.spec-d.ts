/**
 * @file Type Tests - IsNumber
 * @module tutils/types/tests/unit-d/IsNumber
 */

import type TestSubject from '../is-number'
import type Nullable from '../nullable'
import type Timestamp from '../timestamp'

describe('unit-d:types/IsNumber', () => {
  it('should equal false if [T] does not extend [number]', () => {
    expectTypeOf<TestSubject<Nullable<number>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [number]', () => {
    expectTypeOf<TestSubject<Timestamp<'unix'>>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<true>()
  })
})
