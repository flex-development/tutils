/**
 * @file Type Tests - isBigInt64Array
 * @module tutils/utils/tests/unit-d/isBigInt64Array
 */

import type testSubject from '../is-big-int64-array'

describe('unit-d:utils/isBigInt64Array', () => {
  it('should guard BigInt64Array', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<BigInt64Array>()
  })
})
