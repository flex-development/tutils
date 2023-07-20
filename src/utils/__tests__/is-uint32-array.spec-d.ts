/**
 * @file Type Tests - isUint32Array
 * @module tutils/utils/tests/unit-d/isUint32Array
 */

import type testSubject from '../is-uint32-array'

describe('unit-d:utils/isUint32Array', () => {
  it('should guard Uint32Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Uint32Array>()
  })
})
