/**
 * @file Type Tests - fork
 * @module tutils/utils/tests/unit-d/fork
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Times } from '#src/types'
import type testSubject from '../fork'

describe('unit-d:utils/fork', () => {
  it('should return [T[number][], T[number][]]', () => {
    // Arrange
    type T = Readonly<Times<5, Vehicle | Vehicle['vin']>>
    type Expect = [T[number][], T[number][]]

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Expect>()
  })
})
