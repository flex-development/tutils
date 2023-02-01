/**
 * @file Type Tests - isBooleanish
 * @module tutils/guards/tests/unit-d/isBooleanish
 */

import type { Booleanish } from '#src/types'
import type testSubject from '../is-booleanish'

describe('unit-d:guards/isBooleanish', () => {
  it('should guard Booleanish', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Booleanish>()
  })
})
