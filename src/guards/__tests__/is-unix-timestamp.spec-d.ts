/**
 * @file Type Tests - isUnixTimestamp
 * @module tutils/guards/tests/unit-d/isUnixTimestamp
 */

import type { TimestampUnix } from '#src/types'
import type testSubject from '../is-unix-timestamp'

describe('unit-d:guards/isUnixTimestamp', () => {
  it('should guard TimestampUnix', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<TimestampUnix>()
  })
})
