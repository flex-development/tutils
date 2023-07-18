/**
 * @file Type Tests - trimStart
 * @module tutils/utils/tests/unit-d/trimStart
 */

import type { TrimStart } from '#src/types'
import type testSubject from '../trim-start'

describe('unit-d:utils/trimStart', () => {
  it('should return TrimStart<T>', () => {
    // Arrange
    type T = ' hello'

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<TrimStart<T>>()
  })
})
