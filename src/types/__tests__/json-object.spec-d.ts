/**
 * @file Type Tests - JsonObject
 * @module tutils/types/tests/unit-d/JsonObject
 */

import type TestSubject from '../json-object'
import type JsonValue from '../json-value'

describe('unit-d:types/JsonObject', () => {
  describe('keys', () => {
    it('should equal string', () => {
      expectTypeOf<keyof TestSubject>().toBeString()
    })
  })

  describe('properties', () => {
    it('should equal JsonValue', () => {
      expectTypeOf<TestSubject[keyof TestSubject]>().toEqualTypeOf<JsonValue>()
    })
  })
})
