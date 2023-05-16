/**
 * @file Type Tests - isCapitalized
 * @module tutils/utils/tests/unit-d/isCapitalized
 */

import type testSubject from '../is-capitalized'

describe('unit-d:utils/isCapitalized', () => {
  it('should guard Capitalize<T>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<
      Capitalize<string>
    >()
  })
})
