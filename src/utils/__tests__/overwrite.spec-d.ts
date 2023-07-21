/**
 * @file Type Tests - overwrite
 * @module tutils/utils/tests/unit-d/overwrite
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Overwrite } from '#src/types'
import type testSubject from '../overwrite'

describe('unit-d:utils/overwrite', () => {
  it('should return Overwrite<T, U>', () => {
    // Arrange
    type T = Vehicle
    type U = [{ year: `${number}${number}${number}${number}` }]
    type Expect = Overwrite<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
