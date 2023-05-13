/**
 * @file Type Tests - IsAny
 * @module tutils/types/tests/unit-d/IsAny
 */

import type TestSubject from '../is-any'

describe('unit-d:types/IsAny', () => {
  it('should equal false if T is not any', () => {
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<true>()
  })
})
