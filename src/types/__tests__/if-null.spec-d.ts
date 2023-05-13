/**
 * @file Type Tests - IfNull
 * @module tutils/types/tests/unit-d/IfNull
 */

import type TestSubject from '../if-null'

describe('unit-d:types/IfNull', () => {
  type False = false
  type True = true

  it('should equal False if IsNull<T> extends false', () => {
    expectTypeOf<TestSubject<string[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsNull<T> extends true', () => {
    expectTypeOf<TestSubject<null, True, False>>().toEqualTypeOf<True>()
  })
})
