/**
 * @file Type Tests - IfExactOptionalKey
 * @module tutils/types/tests/unit-d/IfExactOptionalKey
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../if-key-optional-exact'

describe('unit-d:types/IfExactOptionalKey', () => {
  type False = false
  type True = true

  it('should equal False if IsExactOptionalKey<T, K> extends false', () => {
    // Arrange
    type K = 'display_name'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsExactOptionalKey<T, K> extends true', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K, True, False>>().toEqualTypeOf<True>()
  })
})
