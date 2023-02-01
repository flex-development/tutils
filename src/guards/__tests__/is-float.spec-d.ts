/**
 * @file Type Tests - isFloat
 * @module tutils/guards/tests/unit-d/isFloat
 */

import type testSubject from '../is-float'

describe('unit-d:guards/isFloat', () => {
  it('should guard number', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNumber()
  })
})
