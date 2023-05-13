/**
 * @file Type Tests - IsArray
 * @module tutils/types/tests/unit-d/IsArray
 */

import type TestSubject from '../is-array'

describe('unit-d:types/IsArray', () => {
  it('should equal false if T does not extend readonly V[]', () => {
    expectTypeOf<TestSubject<string[], number>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends readonly V[]', () => {
    expectTypeOf<TestSubject<string[], string>>().toEqualTypeOf<true>()
  })
})
