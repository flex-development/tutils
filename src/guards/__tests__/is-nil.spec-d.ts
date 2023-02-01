/**
 * @file Type Tests - isNIL
 * @module tutils/guards/tests/unit-d/isNIL
 */

import type { NIL } from '#src/types'
import type testSubject from '../is-nil'

describe('unit-d:guards/isNIL', () => {
  it('should guard NIL', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<NIL>()
  })
})
