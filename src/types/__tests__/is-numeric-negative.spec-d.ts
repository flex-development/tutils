/**
 * @file Type Tests - IsNegativeNumeric
 * @module tutils/types/tests/unit-d/IsNegativeNumeric
 */

import type TestSubject from '../is-numeric-negative'
import type Numeric from '../numeric'
import type NegativeNumeric from '../numeric-negative'

describe('unit-d:types/IsNegativeNumeric', () => {
  it('should equal false if T does not extend NegativeNumeric', () => {
    expectTypeOf<TestSubject<Numeric>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if Trim<T> does not extend T', () => {
    expectTypeOf<TestSubject<' -1'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends NegativeNumeric', () => {
    expectTypeOf<TestSubject<'-3'>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = NegativeNumeric | Numeric

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<boolean>()
    })
  })
})
