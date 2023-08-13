/**
 * @file Type Tests - fallback
 * @module tutils/utils/tests/unit-d/fallback
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { EmptyString, Fallback, Join, NIL, Nilable } from '#src/types'
import type testSubject from '../fallback'

describe('unit-d:utils/fallback', () => {
  it('should return Fallback<T, F, C>', () => {
    // Arrange
    type T = Nilable<Join<['vin', Vehicle['vin']], '_'>>
    type F = EmptyString
    type C = NIL
    type Expect = Fallback<T, F, C>

    // Expect
    expectTypeOf<typeof testSubject<T, F, C>>().returns.toEqualTypeOf<Expect>()
  })
})
