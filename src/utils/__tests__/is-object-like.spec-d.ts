/**
 * @file Type Tests - isObjectLike
 * @module tutils/utils/tests/unit-d/isObjectLike
 */

import type { ObjectCurly } from '#src/types'
import type testSubject from '../is-object-like'

describe('unit-d:utils/isObjectLike', () => {
  it('should guard ObjectCurly | unknown[]', () => {
    // Arrange
    type Expect = ObjectCurly | unknown[]

    // Expect
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Expect>()
  })
})
