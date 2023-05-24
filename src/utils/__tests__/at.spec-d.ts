/**
 * @file Type Tests - at
 * @module tutils/utils/tests/unit-d/at
 */

import type { At } from '#src/types'
import type testSubject from '../at'

describe('unit-d:utils/at', () => {
  it('should return At<T, K, F>', () => {
    // Arrange
    type T = 'foo'
    type K = 0
    type F = string

    // Expect
    expectTypeOf<typeof testSubject<T, K, F>>().returns.toEqualTypeOf<
      At<T, K, F>
    >()
  })
})
