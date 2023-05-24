/**
 * @file Type Tests - IfRequiredKey
 * @module tutils/types/tests/unit-d/IfRequiredKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../if-key-required'

describe('unit-d:types/IfRequiredKey', () => {
  type False = false
  type True = true

  it('should equal False if IsRequiredKey<T, K> extends false', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsRequiredKey<T, K> extends true', () => {
    // Arrange
    type K = 'first_name'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<True>()
  })
})
