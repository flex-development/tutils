/**
 * @file Type Tests - IfUnknown
 * @module tutils/types/tests/unit-d/IfUnknown
 */

import type TestSubject from '../if-unknown'

describe('unit-d:types/IfUnknown', () => {
  type False = false
  type True = true

  it('should equal False if IsUnknown<T> extends false', () => {
    expectTypeOf<TestSubject<unknown[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsUnknown<T> extends true', () => {
    expectTypeOf<TestSubject<unknown, True, False>>().toEqualTypeOf<True>()
  })
})
