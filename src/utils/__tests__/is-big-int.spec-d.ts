/**
 * @file Type Tests - isBigInt
 * @module tutils/utils/tests/unit-d/isBigInt
 */

import type testSubject from '../is-big-int'

describe('unit-d:utils/isBigInt', () => {
  it('should guard bigint', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<bigint>()
  })
})
