/**
 * @file Type Tests - isArrayIndex
 * @module tutils/utils/tests/unit-d/isArrayIndex
 */

import type { Numeric } from '#src/types'
import type testSubject from '../is-array-index'

describe('unit-d:utils/isArrayIndex', () => {
  it('should guard Numeric', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Numeric>()
  })
})
