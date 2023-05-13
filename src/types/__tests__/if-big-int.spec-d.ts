/**
 * @file Type Tests - IfBigInt
 * @module tutils/types/tests/unit-d/IfBigInt
 */

import type TestSubject from '../if-big-int'

describe('unit-d:types/IfBigInt', () => {
  type False = false
  type True = true

  it('should equal False if IsBigInt<T> extends false', () => {
    expectTypeOf<TestSubject<bigint[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsBigInt<T> extends true', () => {
    expectTypeOf<TestSubject<bigint, True, False>>().toEqualTypeOf<True>()
  })
})
