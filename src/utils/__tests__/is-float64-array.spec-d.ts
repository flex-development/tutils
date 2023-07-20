/**
 * @file Type Tests - isFloat64Array
 * @module tutils/utils/tests/unit-d/isFloat64Array
 */

import type testSubject from '../is-float64-array'

describe('unit-d:utils/isFloat64Array', () => {
  it('should guard Float64Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Float64Array>()
  })
})
