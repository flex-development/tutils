/**
 * @file Type Tests - isBooleanish
 * @module tutils/utils/tests/unit-d/isBooleanish
 */

import type { Booleanish } from '#src/types'
import type testSubject from '../is-booleanish'

describe('unit-d:utils/isBooleanish', () => {
  it('should guard Booleanish', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Booleanish>()
  })
})
