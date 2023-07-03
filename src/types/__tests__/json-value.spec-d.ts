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
    expectTypeOf<TestSubject>().extract<JsonArray>().not.toBeNever()
  })

  it('should extract JsonObject', () => {
    expectTypeOf<TestSubject>().extract<JsonObject>().not.toBeNever()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>().extract<JsonPrimitive>().not.toBeNever()
  })
})
