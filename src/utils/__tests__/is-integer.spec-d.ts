/**
 * @file Type Tests - isInteger
 * @module tutils/guards/tests/unit-d/isInteger
 */

import type { Integer } from '#src/types'
import type testSubject from '../is-integer'

describe('unit-d:guards/isInteger', () => {
  it('should guard Integer', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Integer>()
  })
})
