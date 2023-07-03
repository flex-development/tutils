/**
 * @file Type Tests - IfNever
 * @module tutils/types/tests/unit-d/IfNever
 */

import type TestSubject from '../if-never'

describe('unit-d:types/IfNever', () => {
  type False = 0
  type True = 1

  it('should equal F if IsNever<U> extends false', () => {
    expectTypeOf<TestSubject<never[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal T if IsNever<U> extends true', () => {
    expectTypeOf<TestSubject<never, True, False>>().toEqualTypeOf<True>()
  })
})
