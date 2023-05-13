/**
 * @file Type Tests - IsJsonPrimitive
 * @module tutils/types/tests/unit-d/IsJsonPrimitive
 */

import type TestSubject from '../is-json-primitive'
import type JsonPrimitive from '../json-primitive'

describe('unit-d:types/IsJsonPrimitive', () => {
  it('should equal false if T does not extend JsonPrimitive', () => {
    expectTypeOf<TestSubject<Date>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends JsonPrimitive', () => {
    expectTypeOf<TestSubject<JsonPrimitive>>().toEqualTypeOf<true>()
  })
})
