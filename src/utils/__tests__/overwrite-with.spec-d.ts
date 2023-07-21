/**
 * @file Type Tests - overwriteWith
 * @module tutils/utils/tests/unit-d/overwriteWith
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Overwrite } from '#src/types'
import type testSubject from '../overwrite-with'

describe('unit-d:utils/overwriteWith', () => {
  it('should return Overwrite<T, U>', () => {
    // Arrange
    type T = Vehicle
    type U = [{ year: `${number}${number}${number}${number}` }]
    type Expect = Overwrite<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
