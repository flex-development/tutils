/**
 * @file Type Tests - isNIL
 * @module tutils/utils/tests/unit-d/isNIL
 */

import type { NIL } from '#src/types'
import type testSubject from '../is-nil'

describe('unit-d:utils/isNIL', () => {
  it('should guard NIL', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<NIL>()
  })
})
