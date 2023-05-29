/**
 * @file Type Tests - Falsy
 * @module tutils/types/tests/unit-d/Falsy
 */

import type EmptyString from '../empty-string'
import type TestSubject from '../falsy'
import type NIL from '../nil'

describe('unit-d:types/Falsy', () => {
  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().not.toBeNever()
  })

  it('should extract 0n', () => {
    expectTypeOf<TestSubject>().extract<0n>().not.toBeNever()
  })

  it('should extract NIL', () => {
    expectTypeOf<TestSubject>().extract<NIL>().not.toBeNever()
  })

  it('should extract EmptyString', () => {
    expectTypeOf<TestSubject>().extract<EmptyString>().not.toBeNever()
  })

  it('should extract false', () => {
    expectTypeOf<TestSubject>().extract<false>().not.toBeNever()
  })
})
