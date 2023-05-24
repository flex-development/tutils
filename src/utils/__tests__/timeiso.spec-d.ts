/**
 * @file Type Tests - timeiso
 * @module tutils/utils/tests/unit-d/timeiso
 */

import type { Nilable, NumberString, Timestamp } from '#src/types'
import type testSubject from '../timeiso'

describe('unit-d:utils/timeiso', () => {
  it('should be callable with [Nilable<Date | NumberString>]', () => {
    // Arrange
    type Parameters = [date?: Nilable<Date | NumberString>]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Parameters>()
  })

  it('should return Timestamp<"iso">', () => {
    // Arrange
    type Expected = Timestamp<'iso'>

    // Expect
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Expected>()
  })
})
