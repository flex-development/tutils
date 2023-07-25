/**
 * @file Type Tests - merge
 * @module tutils/utils/tests/unit-d/merge
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Merge } from '#src/types'
import type testSubject from '../merge'

describe('unit-d:utils/merge', () => {
  it('should return Merge<T, U>', () => {
    // Arrange
    type T = Vehicle
    type U = [{ vrm: string }]
    type Expect = Merge<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
