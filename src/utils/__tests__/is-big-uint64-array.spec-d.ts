/**
 * @file Type Tests - isBigUint64Array
 * @module tutils/utils/tests/unit-d/isBigUint64Array
 */

import type testSubject from '../is-big-uint64-array'

describe('unit-d:utils/isBigUint64Array', () => {
  it('should guard BigUint64Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<BigUint64Array>()
  })
})
