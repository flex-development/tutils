/**
 * @file Type Tests - OptionalKeys
 * @module tutils/types/tests/unit-d/OptionalKeys
 */

import type TestSubject from '../keys-optional'

describe('unit-d:types/OptionalKeys', () => {
  it('should extract optional keys from T', () => {
    // Arrange
    type T = { display_name?: string; username: string }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<'display_name'>()
  })
})
