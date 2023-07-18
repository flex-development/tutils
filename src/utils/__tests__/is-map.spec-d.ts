/**
 * @file Type Tests - isMap
 * @module tutils/utils/tests/unit-d/isMap
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../is-map'

describe('unit-d:utils/isMap', () => {
  it('should guard Map<K, V>', () => {
    // Arrange
    type K = Vehicle['vin']
    type V = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<K, V>>().guards.toEqualTypeOf<Map<K, V>>()
  })
})
