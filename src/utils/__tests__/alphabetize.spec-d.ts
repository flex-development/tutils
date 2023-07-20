/**
 * @file Type Tests - alphabetize
 * @module tutils/utils/tests/unit-d/alphabetize
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Times, Writable } from '#src/types'
import type testSubject from '../alphabetize'

describe('unit-d:utils/alphabetize', () => {
  it('should return Writable<T>', () => {
    // Arrange
    type T = Readonly<Times<5, Vehicle['vin']>>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Writable<T>>()
  })
})
