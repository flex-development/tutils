/**
 * @file Type Tests - isInt
 * @module tutils/guards/tests/unit-d/isInt
 */

import type testSubject from '../is-int'

describe('unit-d:guards/isInt', () => {
  it('should guard number', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNumber()
  })
})
