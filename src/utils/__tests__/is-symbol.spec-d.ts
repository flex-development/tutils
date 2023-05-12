/**
 * @file Type Tests - isSymbol
 * @module tutils/utils/tests/unit-d/isSymbol
 */

import type testSubject from '../is-symbol'

describe('unit-d:utils/isSymbol', () => {
  it('should guard symbol', () => {
    expectTypeOf<typeof testSubject>().guards.toBeSymbol()
  })
})
