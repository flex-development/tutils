/**
 * @file Type Tests - trim
 * @module tutils/utils/tests/unit-d/trim
 */

import type { Trim } from '#src/types'
import type testSubject from '../trim'

describe('unit-d:utils/trim', () => {
  it('should return Trim<T>', () => {
    // Arrange
    type T = ' baz '

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Trim<T>>()
  })
})
