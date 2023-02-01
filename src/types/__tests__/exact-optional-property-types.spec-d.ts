/**
 * @file Type Tests - ExactOptionalPropertyTypes
 * @module tutils/types/tests/unit-d/ExactOptionalPropertyTypes
 */

import type TestSubject from '../exact-optional-property-types'

describe('unit-d:types/ExactOptionalPropertyTypes', () => {
  it('should remove undefined from optional properties in T', () => {
    // Arrange
    type T = { [x: string]: string | undefined }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ [x: string]: string }>()
  })
})
