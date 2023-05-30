/**
 * @file Type Tests - IsString
 * @module tutils/types/tests/unit-d/IsString
 */

import type TestSubject from '../is-string'
import type Nilable from '../nilable'
import type Timestamp from '../timestamp'

describe('unit-d:types/IsString', () => {
  it('should equal false if [T] does not extend [string]', () => {
    expectTypeOf<TestSubject<Nilable<string>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [string]', () => {
    expectTypeOf<TestSubject<Timestamp<'iso'>>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<true>()
  })
})
