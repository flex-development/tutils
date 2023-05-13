/**
 * @file Type Tests - IsSymbol
 * @module tutils/types/tests/unit-d/IsSymbol
 */

import type TestSubject from '../is-symbol'

describe('unit-d:types/IsSymbol', () => {
  it('should equal false if T does not extend symbol', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends symbol', () => {
    expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<true>()
  })
})
