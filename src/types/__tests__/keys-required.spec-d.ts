/**
 * @file Type Tests - RequiredKeys
 * @module tutils/types/tests/unit-d/RequiredKeys
 */

import type TestSubject from '../keys-required'

describe('unit-d:types/RequiredKeys', () => {
  it('should extract required keys from T', () => {
    // Arrange
    type T = { display_name?: string; username: string }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<'username'>()
  })
})
