/**
 * @file Type Tests - IsBoolean
 * @module tutils/types/tests/unit-d/IsBoolean
 */

import type TestSubject from '../is-boolean'

describe('unit-d:types/IsBoolean', () => {
  it('should equal false if T does not extend boolean', () => {
    expectTypeOf<TestSubject<[boolean, boolean]>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends boolean', () => {
    expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<true>()
  })
})
