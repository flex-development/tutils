/**
 * @file Type Tests - IfLiteral
 * @module tutils/types/tests/unit-d/IfLiteral
 */

import type TestSubject from '../if-literal'

describe('unit-d:types/IfLiteral', () => {
  type P = number
  type False = false
  type True = true

  it('should equal False if IsLiteral<T, P> extends false', () => {
    expectTypeOf<TestSubject<number, P, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsLiteral<T, P> extends true', () => {
    expectTypeOf<TestSubject<13, P, True, False>>().toEqualTypeOf<True>()
  })
})
