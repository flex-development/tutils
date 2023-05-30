/**
 * @file Type Tests - IsSymbol
 * @module tutils/types/tests/unit-d/IsSymbol
 */

import type TestSubject from '../is-symbol'

describe('unit-d:types/IsSymbol', () => {
  it('should equal false if [T] does not extend [symbol]', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<symbol | undefined>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [symbol]', () => {
    expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<true>()
  })
})
