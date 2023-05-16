/**
 * @file Type Tests - isLowercase
 * @module tutils/utils/tests/unit-d/isLowercase
 */

import type testSubject from '../is-lowercase'

describe('unit-d:utils/isLowercase', () => {
  it('should guard Lowercase<T>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Lowercase<string>>()
  })
})
