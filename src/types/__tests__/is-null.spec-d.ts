/**
 * @file Type Tests - IsNull
 * @module tutils/types/tests/unit-d/IsNull
 */

import type TestSubject from '../is-null'

describe('unit-d:types/IsNull', () => {
  it('should equal false if T does not extend null', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends null', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<true>()
  })
})
