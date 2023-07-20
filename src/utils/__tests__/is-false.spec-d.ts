/**
 * @file Type Tests - isFalse
 * @module tutils/utils/tests/unit-d/isFalse
 */

import type testSubject from '../is-false'

describe('unit-d:utils/isFalse', () => {
  it('should guard false', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<false>()
  })
})
