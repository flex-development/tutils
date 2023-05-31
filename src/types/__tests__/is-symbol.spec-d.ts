/**
 * @file Type Tests - IsSymbol
 * @module tutils/types/tests/unit-d/IsSymbol
 */

import type TestSubject from '../is-symbol'
import type Optional from '../optional'

describe('unit-d:types/IsSymbol', () => {
  it('should equal false if [T] does not extend [symbol]', () => {
    expectTypeOf<TestSubject<Optional<symbol>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<false>()
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
