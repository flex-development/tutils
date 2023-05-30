/**
 * @file Type Tests - IsBoolean
 * @module tutils/types/tests/unit-d/IsBoolean
 */

import type Booleanish from '../booleanish'
import type TestSubject from '../is-boolean'

describe('unit-d:types/IsBoolean', () => {
  it('should equal false if [T] does not extend [boolean]', () => {
    expectTypeOf<TestSubject<Booleanish>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [boolean]', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<true>()
  })
})
