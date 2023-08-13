/**
 * @file Type Tests - isNaN
 * @module tutils/utils/tests/unit-d/isNaN
 */

import type { NaN } from '#src/types'
import type testSubject from '../is-nan'

describe('unit-d:utils/isNaN', () => {
  it('should guard NaN', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<NaN>()
  })
})
