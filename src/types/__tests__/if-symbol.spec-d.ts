/**
 * @file Type Tests - IfSymbol
 * @module tutils/types/tests/unit-d/IfSymbol
 */

import type TestSubject from '../if-symbol'

describe('unit-d:types/IfSymbol', () => {
  type False = false
  type True = true

  it('should equal False if IsSymbol<T> extends false', () => {
    expectTypeOf<TestSubject<symbol[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsSymbol<T> extends true', () => {
    expectTypeOf<TestSubject<symbol, True, False>>().toEqualTypeOf<True>()
  })
})
