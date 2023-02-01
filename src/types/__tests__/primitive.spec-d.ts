/**
 * @file Type Tests - Primitive
 * @module tutils/types/tests/unit-d/Primitive
 */

import type JsonPrimitive from '../json-primitive'
import type TestSubject from '../primitive'

describe('unit-d:types/Primitive', () => {
  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>()
      .extract<JsonPrimitive>()
      .toEqualTypeOf<JsonPrimitive>()
  })

  it('should extract bigint', () => {
    expectTypeOf<TestSubject>().extract<bigint>().toEqualTypeOf<bigint>()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().toBeSymbol()
  })

  it('should extract undefined', () => {
    expectTypeOf<TestSubject>().extract<undefined>().toBeUndefined()
  })
})
