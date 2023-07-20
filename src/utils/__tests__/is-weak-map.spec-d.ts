/**
 * @file Type Tests - isWeakMap
 * @module tutils/utils/tests/unit-d/isWeakMap
 */

import type testSubject from '../is-weak-map'

describe('unit-d:utils/isWeakMap', () => {
  it('should guard WeakMap<K, V>', () => {
    // Arrange
    type K = object
    type V = unknown

    // Expect
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<WeakMap<K, V>>()
  })
})
