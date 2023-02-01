/**
 * @file Type Tests - isUndefined
 * @module tutils/guards/tests/unit-d/isUndefined
 */

import type testSubject from '../is-undefined'

describe('unit-d:guards/isUndefined', () => {
  it('should guard undefined', () => {
    expectTypeOf<typeof testSubject>().guards.toBeUndefined()
  })
})
