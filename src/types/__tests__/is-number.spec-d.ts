/**
 * @file Type Tests - IsNumber
 * @module tutils/types/tests/unit-d/IsNumber
 */

import type TestSubject from '../is-number'

describe('unit-d:types/IsNumber', () => {
  it('should equal false if T does not extend number', () => {
    expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends number', () => {
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<true>()
  })
})
