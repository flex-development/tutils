/**
 * @file Type Tests - IsUnknown
 * @module tutils/types/tests/unit-d/IsUnknown
 */

import type TestSubject from '../is-unknown'

describe('unit-d:types/IsUnknown', () => {
  it('should equal false if T is not unknown', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<true>()
  })
})
