/**
 * @file Type Tests - JsonPrimitive
 * @module tutils/types/tests/unit-d/JsonPrimitive
 */

import type TestSubject from '../json-primitive'

describe('unit-d:types/JsonPrimitive', () => {
  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().toBeBoolean()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().toBeNumber()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().toBeNull()
  })
})
