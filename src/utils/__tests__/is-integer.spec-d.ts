/**
 * @file Type Tests - isInteger
 * @module tutils/utils/tests/unit-d/isInteger
 */

import type { Integer } from '#src/types'
import type testSubject from '../is-integer'

describe('unit-d:utils/isInteger', () => {
  it('should guard Integer', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Integer>()
  })
})
