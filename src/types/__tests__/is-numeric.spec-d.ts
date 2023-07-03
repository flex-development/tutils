/**
 * @file Type Tests - IsNumeric
 * @module tutils/types/tests/unit-d/IsNumeric
 */

import type TestSubject from '../is-numeric'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type NegativeNumeric from '../numeric-negative'

describe('unit-d:types/IsNumeric', () => {
  it('should equal false if T does not extend Numeric', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if Trim<T> does not extend T', () => {
    expectTypeOf<TestSubject<' 0'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if NegativeNumeric extends T', () => {
    expectTypeOf<TestSubject<NegativeNumeric>>().toEqualTypeOf<true>()
  })

  it('should equal true if T extends Numeric', () => {
    expectTypeOf<TestSubject<'-13'>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Numeric>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Numeric>>>().toEqualTypeOf<boolean>()
    })
  })
})
