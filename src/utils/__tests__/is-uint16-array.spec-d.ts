/**
 * @file Type Tests - isUint16Array
 * @module tutils/utils/tests/unit-d/isUint16Array
 */

import type testSubject from '../is-uint16-array'

describe('unit-d:utils/isUint16Array', () => {
  it('should guard Uint16Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Uint16Array>()
  })
})
