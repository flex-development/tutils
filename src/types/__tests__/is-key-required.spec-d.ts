/**
 * @file Type Tests - IsRequiredKey
 * @module tutils/types/tests/unit-d/IsRequiredKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../is-key-required'

describe('unit-d:types/IsRequiredKey', () => {
  it('should equal false if K is not required property of T', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<false>()
  })

  it('should equal true if K is required property of T', () => {
    // Arrange
    type K = 'last_name'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<true>()
  })
})
