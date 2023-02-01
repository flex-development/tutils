/**
 * @file Type Tests - isNumeric
 * @module tutils/guards/tests/unit-d/isNumeric
 */

import type { Numeric } from '#src/types'
import type testSubject from '../is-numeric'

describe('unit-d:guards/isNumeric', () => {
  it('should guard Numeric', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Numeric>()
  })
})
