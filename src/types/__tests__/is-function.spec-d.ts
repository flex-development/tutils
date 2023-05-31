/**
 * @file Type Tests - IsFunction
 * @module tutils/types/tests/unit-d/IsFunction
 */

import type Fn from '../fn'
import type TestSubject from '../is-function'
import type Optional from '../optional'

describe('unit-d:types/IsFunction', () => {
  it('should equal false if [T] does not extend [Fn]', () => {
    expectTypeOf<TestSubject<Optional<Fn>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<readonly string[]>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [Fn]', () => {
    expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<true>()
  })
})
