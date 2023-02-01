/**
 * @file Type Tests - Jsonifiable
 * @module tutils/types/tests/unit-d/Jsonifiable
 */

import type JsonPrimitive from '../json-primitive'
import type TestSubject from '../jsonifiable'
import type JsonifiableArray from '../jsonifiable-array'
import type JsonifiableInstance from '../jsonifiable-instance'
import type JsonifiableObject from '../jsonifiable-object'

describe('unit-d:types/Jsonifiable', () => {
  it('should extract JsonifiableArray', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonifiableArray>()
      .toEqualTypeOf<JsonifiableArray>()
  })

  it('should extract JsonifiableInstance', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonifiableInstance>()
      .toEqualTypeOf<JsonifiableInstance>()
  })

  it('should extract JsonifiableObject', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonifiableObject>()
      .toEqualTypeOf<JsonifiableObject>()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonPrimitive>()
      .toEqualTypeOf<JsonPrimitive>()
  })
})
