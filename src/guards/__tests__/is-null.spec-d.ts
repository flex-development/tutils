/**
 * @file Type Tests - isNull
 * @module tutils/guards/tests/unit-d/isNull
 */

import type testSubject from '../is-null'

describe('unit-d:guards/isNull', () => {
  it('should guard null', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNull()
  })
})
