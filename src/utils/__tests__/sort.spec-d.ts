/**
 * @file Type Tests - sort
 * @module tutils/utils/tests/unit-d/sort
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Times, Writable } from '#src/types'
import type testSubject from '../sort'

describe('unit-d:utils/sort', () => {
  it('should return Writable<T>', () => {
    // Arrange
    type T = Readonly<Times<5, Vehicle>>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Writable<T>>()
  })
})
