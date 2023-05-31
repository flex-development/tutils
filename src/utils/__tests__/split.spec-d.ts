/**
 * @file Type Tests - split
 * @module tutils/utils/tests/unit-d/split
 */

import type { Optional, Split } from '#src/types'
import type testSubject from '../split'

describe('unit-d:utils/split', () => {
  it('should return Split<T, Delimiter>', () => {
    // Arrange
    type T = string
    type Delimiter = Optional<RegExp | string>

    // Expect
    expectTypeOf<typeof testSubject<T, Delimiter>>().returns.toEqualTypeOf<
      Split<T, Delimiter>
    >()
  })
})
