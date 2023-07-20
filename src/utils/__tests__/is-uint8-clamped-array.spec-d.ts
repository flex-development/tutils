/**
 * @file Type Tests - isUint8ClampedArray
 * @module tutils/utils/tests/unit-d/isUint8ClampedArray
 */

import type testSubject from '../is-uint8-clamped-array'

describe('unit-d:utils/isUint8ClampedArray', () => {
  it('should guard Uint8ClampedArray', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Uint8ClampedArray>()
  })
})
