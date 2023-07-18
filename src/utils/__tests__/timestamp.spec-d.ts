/**
 * @file Type Tests - timestamp
 * @module tutils/utils/tests/unit-d/timestamp
 */

import type { Timestamp, TimestampFormat } from '#src/types'
import type testSubject from '../timestamp'

describe('unit-d:utils/timeunix', () => {
  it('should return Timestamp<F>', () => {
    // Arrange
    type F = TimestampFormat

    // Expect
    expectTypeOf<typeof testSubject<F>>().returns.toEqualTypeOf<Timestamp<F>>()
  })
})
