/**
 * @file Type Tests - isUint8Array
 * @module tutils/utils/tests/unit-d/isUint8Array
 */

import type testSubject from '../is-uint8-array'

describe('unit-d:utils/isUint8Array', () => {
  it('should guard Uint8Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Uint8Array>()
  })
})
