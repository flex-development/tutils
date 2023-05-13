/**
 * @file Type Tests - IsString
 * @module tutils/types/tests/unit-d/IsString
 */

import type TestSubject from '../is-string'

describe('unit-d:types/IsString', () => {
  it('should equal false if T does not extend string', () => {
    expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends string', () => {
    expectTypeOf<TestSubject<string>>().toEqualTypeOf<true>()
  })
})
