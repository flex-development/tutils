/**
 * @file Type Tests - descriptor
 * @module tutils/utils/tests/unit-d/descriptor
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type testSubject from '../descriptor'

describe('unit-d:utils/descriptor', () => {
  it('should return PropertyDescriptor<T>', () => {
    // Arrange
    type T = number
    type Expect = PropertyDescriptor<T>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Expect>()
  })
})
