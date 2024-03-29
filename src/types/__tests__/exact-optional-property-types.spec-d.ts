/**
 * @file Type Tests - ExactOptionalPropertyTypes
 * @module tutils/types/tests/unit-d/ExactOptionalPropertyTypes
 */

import type TestSubject from '../exact-optional-property-types'
import type Optional from '../optional'

describe('unit-d:types/ExactOptionalPropertyTypes', () => {
  it('should remove undefined from optional properties in T', () => {
    // Arrange
    type T = { [x: string]: Optional<string> }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ [x: string]: string }>()
  })
})
