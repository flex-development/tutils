/**
 * @file Type Tests - split
 * @module tutils/utils/tests/unit-d/split
 */

import type { Dot, Split } from '#src/types'
import type testSubject from '../split'

describe('unit-d:utils/split', () => {
  it('should return Split<T, S>', () => {
    // Arrange
    type T = 'data.message'
    type S = Dot
    type Expect = Split<T, S>

    // Expect
    expectTypeOf<typeof testSubject<T, S>>().returns.toEqualTypeOf<Expect>()
  })
})
