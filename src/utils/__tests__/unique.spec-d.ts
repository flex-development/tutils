/**
 * @file Type Tests - unique
 * @module tutils/utils/tests/unit-d/unique
 */

import type { NumberString, PropertyKey } from '#src'
import type testSubject from '../unique'

describe('unit-d:utils/unique', () => {
  it('should return U[]', () => {
    // Arrange
    type T = NumberString
    type K = PropertyKey
    type U = string

    // Expect
    expectTypeOf<typeof testSubject<T, K, U>>().returns.toEqualTypeOf<U[]>()
  })
})
