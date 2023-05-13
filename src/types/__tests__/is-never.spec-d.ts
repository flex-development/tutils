/**
 * @file Type Tests - IsNever
 * @module tutils/types/tests/unit-d/IsNever
 */

import type TestSubject from '../is-never'

describe('unit-d:types/IsNever', () => {
  it('should equal false if [T] does not extend [never]', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [never]', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<true>()
  })
})
