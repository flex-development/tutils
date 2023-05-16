/**
 * @file Type Tests - uppercase
 * @module tutils/utils/tests/unit-d/uppercase
 */

import type testSubject from '../uppercase'

describe('unit-d:utils/uppercase', () => {
  it('should return Uppercase<T>', () => {
    // Arrange
    type T = 'string'

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Uppercase<T>>()
  })
})
