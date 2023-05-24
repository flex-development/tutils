/**
 * @file Type Tests - timeunix
 * @module tutils/utils/tests/unit-d/timeunix
 */

import type { Nilable, NumberString, Timestamp } from '#src/types'
import type testSubject from '../timeunix'

describe('unit-d:utils/timeunix', () => {
  it('should be callable with [Nilable<Date | NumberString>]', () => {
    // Arrange
    type Parameters = [date?: Nilable<Date | NumberString>]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Parameters>()
  })

  it('should return Timestamp<"unix">', () => {
    // Arrange
    type Expected = Timestamp<'unix'>

    // Expect
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Expected>()
  })
})
