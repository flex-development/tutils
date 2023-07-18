/**
 * @file Type Tests - isLowercase
 * @module tutils/utils/tests/unit-d/isLowercase
 */

import type testSubject from '../is-lowercase'

describe('unit-d:utils/isLowercase', () => {
  it('should guard Lowercase<T>', () => {
    // Arrange
    type T = 'AND'

    // Expect
    expectTypeOf<typeof testSubject<T>>().guards.toEqualTypeOf<Lowercase<T>>()
  })
})
