/**
 * @file Type Tests - capitalize
 * @module tutils/utils/tests/unit-d/capitalize
 */

import type testSubject from '../capitalize'

describe('unit-d:utils/capitalize', () => {
  it('should return Capitalize<T>', () => {
    // Arrange
    type T = string

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Capitalize<T>>()
  })
})
