/**
 * @file Type Tests - IsNumeric
 * @module tutils/types/tests/unit-d/IsNumeric
 */

import type TestSubject from '../is-numeric'
import type Nilable from '../nilable'
import type Numeric from '../numeric'

describe('unit-d:types/IsNumeric', () => {
  it('should equal false if [T] does not extend [Numeric]', () => {
    expectTypeOf<TestSubject<Nilable<Numeric>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<false>()
  })

  it('should equal false if [Trim<T>] does not extend [T]', () => {
    expectTypeOf<TestSubject<' 0'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [Numeric]', () => {
    expectTypeOf<TestSubject<Numeric>>().toEqualTypeOf<true>()
  })
})
