/**
 * @file Type Tests - isSymbol
 * @module tutils/guards/tests/unit-d/isSymbol
 */

import type testSubject from '../is-symbol'

describe('unit-d:guards/isSymbol', () => {
  it('should guard symbol', () => {
    expectTypeOf<typeof testSubject>().guards.toBeSymbol()
  })
})
