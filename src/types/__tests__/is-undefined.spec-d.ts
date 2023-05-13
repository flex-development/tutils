/**
 * @file Type Tests - IsUndefined
 * @module tutils/types/tests/unit-d/IsUndefined
 */

import type TestSubject from '../is-undefined'

describe('unit-d:types/IsUndefined', () => {
  it('should equal false if T does not extend undefined', () => {
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends undefined', () => {
    expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<true>()
  })
})
