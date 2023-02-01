/**
 * @file Type Tests - isBigInt
 * @module tutils/guards/tests/unit-d/isBigInt
 */

import type testSubject from '../is-big-int'

describe('unit-d:guards/isBigInt', () => {
  it('should guard bigint', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<bigint>()
  })
})
