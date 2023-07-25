/**
 * @file Type Tests - set
 * @module tutils/utils/tests/unit-d/set
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Setter } from '#src/types'
import type testSubject from '../set'

describe('unit-d:utils/set', () => {
  it('should return Setter<T, K, V>', () => {
    // Arrange
    type T = Vehicle
    type K = 'vrm'
    type V = string
    type Expect = Setter<T, K, V>

    // Expect
    expectTypeOf<typeof testSubject<T, K, V>>().returns.toEqualTypeOf<Expect>()
  })
})
