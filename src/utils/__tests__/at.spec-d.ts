/**
 * @file Type Tests - at
 * @module tutils/utils/tests/unit-d/at
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { At, EmptyObject, Objectify } from '#src/types'
import type testSubject from '../at'

describe('unit-d:utils/at', () => {
  it('should return At<T, K, F>', () => {
    // Arrange
    type T = readonly [Vehicle?]
    type K = 0
    type F = Objectify<EmptyObject>
    type Expect = At<T, K, F>

    // Expect
    expectTypeOf<typeof testSubject<T, K, F>>().returns.toEqualTypeOf<Expect>()
  })
})
