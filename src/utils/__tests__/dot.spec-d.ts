/**
 * @file Type Tests - DOT
 * @module tutils/utils/tests/unit-d/DOT
 */

import type { Dot } from '#src/types'
import type testSubject from '../dot'

describe('unit-d:utils/DOT', () => {
  it('should match Dot', () => {
    expectTypeOf<typeof testSubject>().toEqualTypeOf<Dot>()
  })
})
