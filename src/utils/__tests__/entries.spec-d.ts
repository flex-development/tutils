/**
 * @file Type Tests - entries
 * @module tutils/utils/tests/unit-d/entries
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Entries } from '#src/types'
import type testSubject from '../entries'

describe('unit-d:utils/entries', () => {
  it('should return Entries<T>', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Entries<T>>()
  })
})
