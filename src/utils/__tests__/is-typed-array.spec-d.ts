/**
 * @file Type Tests - isTypedArray
 * @module tutils/utils/tests/unit-d/isTypedArray
 */

import type { TypedArray } from '#src/types'
import type testSubject from '../is-typed-array'

describe('unit-d:utils/isTypedArray', () => {
  it('should guard TypedArray', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<TypedArray>()
  })
})
