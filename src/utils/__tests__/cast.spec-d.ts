/**
 * @file Type Tests - cast
 * @module tutils/utils/tests/unit-d/cast
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../cast'

describe('unit-d:utils/cast', () => {
  it('should return T', () => {
    expectTypeOf<typeof testSubject<Vehicle>>().returns.toEqualTypeOf<Vehicle>()
  })
})
