/**
 * @file Type Tests - JsonValue
 * @module tutils/types/tests/unit-d/JsonValue
 */

import type JsonArray from '../json-array'
import type JsonObject from '../json-object'
import type JsonPrimitive from '../json-primitive'
import type TestSubject from '../json-value'

describe('unit-d:types/JsonValue', () => {
  it('should extract JsonArray', () => {
    expectTypeOf<TestSubject>().extract<JsonArray>().toEqualTypeOf<JsonArray>()
  })

  it('should extract JsonObject', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonObject>()
      .toEqualTypeOf<JsonObject>()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonPrimitive>()
      .toEqualTypeOf<JsonPrimitive>()
  })
})
