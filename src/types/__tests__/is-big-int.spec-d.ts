/**
 * @file Type Tests - IsBigInt
 * @module tutils/types/tests/unit-d/IsBigInt
 */

import type TestSubject from '../is-big-int'
import type Nullable from '../nullable'

describe('unit-d:types/IsBigInt', () => {
  it('should equal false if [T] does not extend [bigint]', () => {
    expectTypeOf<TestSubject<Nullable<bigint>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [bigint]', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<true>()
  })
})
