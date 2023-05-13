/**
 * @file Type Tests - IfNumber
 * @module tutils/types/tests/unit-d/IfNumber
 */

import type TestSubject from '../if-number'

describe('unit-d:types/IfNumber', () => {
  type False = false
  type True = true

  it('should equal False if IsNumber<T> extends false', () => {
    expectTypeOf<TestSubject<number[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsNumber<T> extends true', () => {
    expectTypeOf<TestSubject<number, True, False>>().toEqualTypeOf<True>()
  })
})
