/**
 * @file Type Tests - groupAsync
 * @module tutils/utils/tests/unit-d/groupAsync
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../group-async'

describe('unit-d:utils/groupAsync', () => {
  it('should return Promise<Record<K, T[number][]>>', () => {
    // Arrange
    type T = Vehicle[]
    type K = Vehicle['year']
    type Expect = Promise<Record<K, T[number][]>>

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Expect>()
  })
})
