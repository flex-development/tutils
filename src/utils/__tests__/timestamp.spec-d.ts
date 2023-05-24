/**
 * @file Type Tests - timestamp
 * @module tutils/utils/tests/unit-d/timestamp
 */

import type {
  Nilable,
  NumberString,
  Timestamp,
  TimestampFormat
} from '#src/types'
import type testSubject from '../timestamp'

describe('unit-d:utils/timeunix', () => {
  type F = TimestampFormat

  it('should be callable with [Nilable<Date | NumberString>, Nilable<F>]', () => {
    // Arrange
    type Parameters = [date?: Nilable<Date | NumberString>, format?: Nilable<F>]

    // Expect
    expectTypeOf<typeof testSubject<F>>().parameters.toEqualTypeOf<Parameters>()
  })

  it('should return Timestamp<F>', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Timestamp<F>>()
  })
})
