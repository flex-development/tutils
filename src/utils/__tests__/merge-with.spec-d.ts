/**
 * @file Type Tests - mergeWith
 * @module tutils/utils/tests/unit-d/mergeWith
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Merge } from '#src/types'
import type testSubject from '../merge-with'

describe('unit-d:utils/mergeWith', () => {
  it('should return Merge<T, U>', () => {
    // Arrange
    type T = Vehicle
    type U = [{ vrm: string }]
    type Expect = Merge<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
