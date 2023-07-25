/**
 * @file Type Tests - group
 * @module tutils/utils/tests/unit-d/group
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../group'

describe('unit-d:utils/group', () => {
  it('should return { [H in K]?: T[number][] }', () => {
    // Arrange
    type T = Vehicle[]
    type K = Vehicle['year']
    type Expect = { [H in K]?: T[number][] }

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Expect>()
  })
})
