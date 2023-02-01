/**
 * @file Type Tests - EmptyValue
 * @module tutils/types/tests/unit-d/EmptyValue
 */

import type EmptyString from '../empty-string'
import type TestSubject from '../empty-value'
import type NIL from '../nil'

describe('unit-d:types/EmptyValue', () => {
  it('should extract EmptyString', () => {
    expectTypeOf<TestSubject>()
      .extract<EmptyString>()
      .toEqualTypeOf<EmptyString>()
  })

  it('should extract NIL', () => {
    expectTypeOf<TestSubject>().extract<NIL>().toEqualTypeOf<NIL>()
  })
})
