/**
 * @file Type Tests - IfUndefined
 * @module tutils/types/tests/unit-d/IfUndefined
 */

import type TestSubject from '../if-undefined'

describe('unit-d:types/IfUndefined', () => {
  type False = false
  type True = true

  it('should equal False if IsUndefined<T> extends false', () => {
    expectTypeOf<TestSubject<undefined[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsUndefined<T> extends true', () => {
    expectTypeOf<TestSubject<undefined, True, False>>().toEqualTypeOf<True>()
  })
})
