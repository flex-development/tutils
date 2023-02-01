/**
 * @file Type Tests - isNumber
 * @module tutils/guards/tests/unit-d/isNumber
 */

import type testSubject from '../is-number'

describe('unit-d:guards/isNumber', () => {
  it('should guard number', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNumber()
  })
})
