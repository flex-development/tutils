/**
 * @file Type Tests - IfObject
 * @module tutils/types/tests/unit-d/IfObject
 */

import type TestSubject from '../if-object'

describe('unit-d:types/IfObject', () => {
  type False = false
  type True = true

  it('should equal False if IsObject<T> extends false', () => {
    expectTypeOf<TestSubject<string, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsObject<T> extends true', () => {
    expectTypeOf<TestSubject<object, True, False>>().toEqualTypeOf<True>()
  })
})
