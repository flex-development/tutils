/**
 * @file Type Tests - JsonObject
 * @module tutils/types/tests/unit-d/JsonObject
 */

import type TestSubject from '../json-object'
import type JsonValue from '../json-value'

describe('unit-d:types/JsonObject', () => {
  it('should have keys of type string', () => {
    expectTypeOf<keyof TestSubject>().toBeString()
  })

  it('should have properties of type JsonValue', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<JsonValue>()
  })
})
