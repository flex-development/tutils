/**
 * @file Type Tests - isUndefined
 * @module tutils/utils/tests/unit-d/isUndefined
 */

import type testSubject from '../is-undefined'

describe('unit-d:utils/isUndefined', () => {
  it('should guard undefined', () => {
    expectTypeOf<typeof testSubject>().guards.toBeUndefined()
  })
})
