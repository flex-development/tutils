/**
 * @file Type Tests - timeiso
 * @module tutils/utils/tests/unit-d/timeiso
 */

import type { Timestamp } from '#src/types'
import type testSubject from '../timeiso'

describe('unit-d:utils/timeiso', () => {
  it('should return Timestamp<"iso">', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Timestamp<'iso'>>()
  })
})
