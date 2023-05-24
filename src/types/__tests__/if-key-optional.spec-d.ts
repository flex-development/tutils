/**
 * @file Type Tests - IfOptionalKey
 * @module tutils/types/tests/unit-d/IfOptionalKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../if-key-optional'

describe('unit-d:types/IfOptionalKey', () => {
  type False = false
  type True = true

  it('should equal False if IsOptionalKey<T, K> extends false', () => {
    // Arrange
    type K = 'last_name'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsOptionalKey<T, K> extends true', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<True>()
  })
})
