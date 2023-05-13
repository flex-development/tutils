/**
 * @file Type Tests - IsNumeric
 * @module tutils/types/tests/unit-d/IsNumeric
 */

import type TestSubject from '../is-numeric'
import type Numeric from '../numeric'

describe('unit-d:types/IsNumeric', () => {
  it('should equal false if T does not extend Numeric', () => {
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends Numeric', () => {
    expectTypeOf<TestSubject<Numeric>>().toEqualTypeOf<true>()
  })
})
