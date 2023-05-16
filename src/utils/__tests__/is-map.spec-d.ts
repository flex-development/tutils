/**
 * @file Type Tests - isMap
 * @module tutils/utils/tests/unit-d/isMap
 */

import type testSubject from '../is-map'

describe('unit-d:utils/isMap', () => {
  it('should guard Map<K, V>', () => {
    // Arrange
    type K = string
    type V = number

    // Expect
    expectTypeOf<typeof testSubject<K, V>>().guards.toEqualTypeOf<Map<K, V>>()
  })
})
