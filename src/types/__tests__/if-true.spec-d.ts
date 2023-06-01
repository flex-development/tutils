/**
 * @file Type Tests - IfTrue
 * @module tutils/types/tests/unit-d/IfTrue
 */

import type TestSubject from '../if-true'

describe('unit-d:types/IfTrue', () => {
  type False = false
  type True = true

  it('should equal False if IsTrue<T> extends false', () => {
    expectTypeOf<TestSubject<1, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsTrue<T> extends true', () => {
    expectTypeOf<TestSubject<true, True, False>>().toEqualTypeOf<True>()
  })
})
