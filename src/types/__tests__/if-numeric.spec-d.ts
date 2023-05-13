/**
 * @file Type Tests - IfNumeric
 * @module tutils/types/tests/unit-d/IfNumeric
 */

import type TestSubject from '../if-numeric'
import type Numeric from '../numeric'

describe('unit-d:types/IfNumeric', () => {
  type False = false
  type True = true

  it('should equal False if IsNumeric<T> extends false', () => {
    expectTypeOf<TestSubject<Numeric[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsNumeric<T> extends true', () => {
    expectTypeOf<TestSubject<Numeric, True, False>>().toEqualTypeOf<True>()
  })
})
