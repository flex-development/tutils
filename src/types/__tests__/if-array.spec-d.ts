/**
 * @file Type Tests - IfArray
 * @module tutils/types/tests/unit-d/IfArray
 */

import type TestSubject from '../if-array'

describe('unit-d:types/IfArray', () => {
  type False = false
  type True = true
  type V = string

  it('should equal False if IsArray<T, V> extends false', () => {
    expectTypeOf<TestSubject<V[][], V, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsArray<T, V> extends true', () => {
    expectTypeOf<TestSubject<V[], V, True, False>>().toEqualTypeOf<True>()
  })
})
