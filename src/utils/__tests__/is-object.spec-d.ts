/**
 * @file Type Tests - isObject
 * @module tutils/utils/tests/unit-d/isObject
 */

import type { ObjectCurly } from '#src/types'
import type testSubject from '../is-object'

describe('unit-d:utils/isObject', () => {
  it('should guard ObjectCurly | unknown[]', () => {
    // Arrange
    type Expect = ObjectCurly | unknown[]

    // Expect
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Expect>()
  })
})
