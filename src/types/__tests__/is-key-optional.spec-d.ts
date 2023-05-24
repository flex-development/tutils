/**
 * @file Type Tests - IsOptionalKey
 * @module tutils/types/tests/unit-d/IsOptionalKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../is-key-optional'

describe('unit-d:types/IsOptionalKey', () => {
  it('should equal false if K is not optional property of T', () => {
    // Arrange
    type K1 = 'first_name'
    type K2 = 'last_name'

    // Expect
    expectTypeOf<TestSubject<Author, K1>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<Author, K2>>().toEqualTypeOf<false>()
  })

  it('should equal true if K is optional property of T', () => {
    // Arrange
    type K1 = 'display_name'
    type K2 = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K1>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<Author, K2>>().toEqualTypeOf<true>()
  })
})
