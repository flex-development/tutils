/**
 * @file Type Tests - isSet
 * @module tutils/utils/tests/unit-d/isSet
 */

import type testSubject from '../is-set'

describe('unit-d:utils/isSet', () => {
  it('should guard Set<T>', () => {
    // Arrange
    type T = string

    // Expect
    expectTypeOf<typeof testSubject<T>>().guards.toEqualTypeOf<Set<T>>()
  })
})
