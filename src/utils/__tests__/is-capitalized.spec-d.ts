/**
 * @file Type Tests - isCapitalized
 * @module tutils/utils/tests/unit-d/isCapitalized
 */

import type testSubject from '../is-capitalized'

describe('unit-d:utils/isCapitalized', () => {
  it('should guard Capitalize<T>', () => {
    // Arrange
    type T = 'fred'

    // Expect
    expectTypeOf<typeof testSubject<T>>().guards.toEqualTypeOf<Capitalize<T>>()
  })
})
