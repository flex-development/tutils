/**
 * @file Type Tests - isFloat32Array
 * @module tutils/utils/tests/unit-d/isFloat32Array
 */

import type testSubject from '../is-float32-array'

describe('unit-d:utils/isFloat32Array', () => {
  it('should guard Float32Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Float32Array>()
  })
})
