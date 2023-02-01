/**
 * @file Type Tests - JsonArray
 * @module tutils/types/tests/unit-d/JsonArray
 */

import type TestSubject from '../json-array'
import type JsonValue from '../json-value'

describe('unit-d:types/JsonArray', () => {
  it('should equal JsonValue[]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<JsonValue[]>()
  })
})
