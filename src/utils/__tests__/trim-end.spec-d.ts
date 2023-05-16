/**
 * @file Type Tests - trimEnd
 * @module tutils/utils/tests/unit-d/trimEnd
 */

import type { TrimEnd } from '#src/types'
import type testSubject from '../trim-end'

describe('unit-d:utils/trimEnd', () => {
  it('should return TrimEnd<T>', () => {
    // Arrange
    type T = 'foo '

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<TrimEnd<T>>()
  })
})
