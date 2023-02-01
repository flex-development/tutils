/**
 * @file Type Tests - KeysOptional
 * @module tutils/types/tests/unit-d/KeysOptional
 */

import type TestSubject from '../keys-optional'

describe('unit-d:types/KeysOptional', () => {
  it('should extract optional keys from T', () => {
    // Arrange
    type T = { display_name?: string; username: string }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<'display_name'>()
  })
})
