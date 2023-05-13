/**
 * @file Type Tests - IfTuple
 * @module tutils/types/tests/unit-d/IfTuple
 */

import type TestSubject from '../if-tuple'

describe('unit-d:types/IfTuple', () => {
  type False = false
  type True = true

  it('should equal False if IsTuple<T> extends false', () => {
    expectTypeOf<TestSubject<number[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsTuple<T> extends true', () => {
    expectTypeOf<TestSubject<[0, 1, 2], True, False>>().toEqualTypeOf<True>()
  })
})
