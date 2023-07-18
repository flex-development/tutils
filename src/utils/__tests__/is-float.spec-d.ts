/**
 * @file Type Tests - isFloat
 * @module tutils/utils/tests/unit-d/isFloat
 */

import type { Float } from '#src/types'
import type testSubject from '../is-float'

describe('unit-d:utils/isFloat', () => {
  it('should guard Float', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Float>()
  })
})
