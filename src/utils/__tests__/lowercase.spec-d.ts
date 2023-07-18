/**
 * @file Type Tests - lowercase
 * @module tutils/utils/tests/unit-d/lowercase
 */

import type testSubject from '../lowercase'

describe('unit-d:utils/lowercase', () => {
  it('should return Lowercase<T>', () => {
    // Arrange
    type T = 'AND'

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Lowercase<T>>()
  })
})
