/**
 * @file Type Tests - isTrue
 * @module tutils/utils/tests/unit-d/isTrue
 */

import type testSubject from '../is-true'

describe('unit-d:utils/isTrue', () => {
  it('should guard true', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<true>()
  })
})
