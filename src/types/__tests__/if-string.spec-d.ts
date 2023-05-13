/**
 * @file Type Tests - IfString
 * @module tutils/types/tests/unit-d/IfString
 */

import type TestSubject from '../if-string'

describe('unit-d:types/IfString', () => {
  type False = false
  type True = true

  it('should equal False if IsString<T> extends false', () => {
    expectTypeOf<TestSubject<string[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsString<T> extends true', () => {
    expectTypeOf<TestSubject<string, True, False>>().toEqualTypeOf<True>()
  })
})
