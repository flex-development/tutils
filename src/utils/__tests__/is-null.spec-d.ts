/**
 * @file Type Tests - isNull
 * @module tutils/utils/tests/unit-d/isNull
 */

import type testSubject from '../is-null'

describe('unit-d:utils/isNull', () => {
  it('should guard null', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNull()
  })
})
