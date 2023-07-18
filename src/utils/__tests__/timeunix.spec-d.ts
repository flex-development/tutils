/**
 * @file Type Tests - timeunix
 * @module tutils/utils/tests/unit-d/timeunix
 */

import type { Timestamp } from '#src/types'
import type testSubject from '../timeunix'

describe('unit-d:utils/timeunix', () => {
  it('should return Timestamp<"unix">', () => {
    // Arrange
    type Expect = Timestamp<'unix'>

    // Expect
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Expect>()
  })
})
