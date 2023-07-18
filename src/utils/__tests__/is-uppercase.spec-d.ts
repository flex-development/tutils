/**
 * @file Type Tests - isUppercase
 * @module tutils/utils/tests/unit-d/isUppercase
 */

import type testSubject from '../is-uppercase'

describe('unit-d:utils/isUppercase', () => {
  it('should guard Uppercase<T>', () => {
    // Arrange
    type T = 'and'

    // Expect
    expectTypeOf<typeof testSubject<T>>().guards.toEqualTypeOf<Uppercase<T>>()
  })
})
