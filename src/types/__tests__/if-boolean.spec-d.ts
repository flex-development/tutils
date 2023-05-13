/**
 * @file Type Tests - IfBoolean
 * @module tutils/types/tests/unit-d/IfBoolean
 */

import type TestSubject from '../if-boolean'

describe('unit-d:types/IfBoolean', () => {
  type False = false
  type True = true

  it('should equal False if IsBoolean<T> extends false', () => {
    expectTypeOf<TestSubject<boolean[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsBoolean<T> extends true', () => {
    expectTypeOf<TestSubject<boolean, True, False>>().toEqualTypeOf<True>()
  })
})
