/**
 * @file Type Tests - KeysRequired
 * @module tutils/types/tests/unit-d/KeysRequired
 */

import type TestSubject from '../keys-required'

describe('unit-d:types/KeysRequired', () => {
  it('should extract required keys from T', () => {
    // Arrange
    type T = { display_name?: string; username: string }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<'username'>()
  })
})
