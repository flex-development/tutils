/**
 * @file Type Tests - JsonPrimitive
 * @module tutils/types/tests/unit-d/JsonPrimitive
 */

import type TestSubject from '../json-primitive'
import type NumberString from '../number-string'

describe('unit-d:types/JsonPrimitive', () => {
  it('should extract NumberString', () => {
    expectTypeOf<TestSubject>().extract<NumberString>().not.toBeNever()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().toBeBoolean()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().toBeNull()
  })
})
