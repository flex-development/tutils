/**
 * @file Type Tests - isJoinable
 * @module tutils/utils/tests/unit-d/isJoinable
 */

import type { Joinable } from '#src/types'
import type testSubject from '../is-joinable'

describe('unit-d:utils/isJoinable', () => {
  it('should guard Joinable', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Joinable>()
  })
})
