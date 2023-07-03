/**
 * @file Type Tests - JsonArray
 * @module tutils/types/tests/unit-d/JsonArray
 */

import type TestSubject from '../json-array'
import type JsonValue from '../json-value'

describe('unit-d:types/JsonArray', () => {
  it('should extract JsonValue[]', () => {
    expectTypeOf<TestSubject>().extract<JsonValue[]>().not.toBeNever()
  })

  it('should extract readonly JsonValue[]', () => {
    expectTypeOf<TestSubject>().extract<readonly JsonValue[]>().not.toBeNever()
  })
})
