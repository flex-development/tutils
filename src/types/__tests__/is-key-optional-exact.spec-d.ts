/**
 * @file Type Tests - IsExactOptionalKey
 * @module tutils/types/tests/unit-d/IsExactOptionalKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../is-key-optional-exact'

describe('unit-d:types/IsExactOptionalKey', () => {
  it('should equal false if K is not exact optional property of T', () => {
    // Arrange
    type K1 = 'display_name'
    type K2 = 'first_name'
    type K3 = 'last_name'

    // Expect
    expectTypeOf<TestSubject<Author, K1>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<Author, K2>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<Author, K3>>().toEqualTypeOf<false>()
  })

  it('should equal true if K is exact optional property of T', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<true>()
  })
})
