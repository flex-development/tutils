/**
 * @file Type Tests - IsBigInt
 * @module tutils/types/tests/unit-d/IsBigInt
 */

import type TestSubject from '../is-big-int'

describe('unit-d:types/IsBigInt', () => {
  it('should equal false if T does not extend bigint', () => {
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends bigint', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<true>()
  })
})
