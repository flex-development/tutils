/**
 * @file Type Tests - isBoolean
 * @module tutils/guards/tests/unit-d/isBoolean
 */

import type testSubject from '../is-boolean'

describe('unit-d:guards/isBoolean', () => {
  it('should guard boolean', () => {
    expectTypeOf<typeof testSubject>().guards.toBeBoolean()
  })
})
