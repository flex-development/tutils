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
    expectTypeOf<TestSubject>().extract<JsonifiableArray>().not.toBeNever()
  })

  it('should extract JsonifiableInstance', () => {
    expectTypeOf<TestSubject>().extract<JsonifiableInstance>().not.toBeNever()
  })

  it('should extract JsonifiableObject', () => {
    expectTypeOf<TestSubject>().extract<JsonifiableObject>().not.toBeNever()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>().extract<JsonPrimitive>().not.toBeNever()
  })
})
