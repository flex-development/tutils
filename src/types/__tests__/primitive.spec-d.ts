/**
 * @file Type Tests - Primitive
 * @module tutils/types/tests/unit-d/Primitive
 */

import type JsonPrimitive from '../json-primitive'
import type TestSubject from '../primitive'

describe('unit-d:types/Primitive', () => {
  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>().extract<JsonPrimitive>().not.toBeNever()
  })

  it('should extract bigint', () => {
    expectTypeOf<TestSubject>().extract<bigint>().not.toBeNever()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().not.toBeNever()
  })

  it('should extract undefined', () => {
    expectTypeOf<TestSubject>().extract<undefined>().not.toBeNever()
  })
})
