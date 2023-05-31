/**
 * @file Type Tests - Falsy
 * @module tutils/types/tests/unit-d/Falsy
 */

import type EmptyValue from '../empty-value'
import type TestSubject from '../falsy'

describe('unit-d:types/Falsy', () => {
  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().not.toBeNever()
  })

  it('should extract 0n', () => {
    expectTypeOf<TestSubject>().extract<0n>().not.toBeNever()
  })

  it('should extract EmptyValue', () => {
    expectTypeOf<TestSubject>().extract<EmptyValue>().not.toBeNever()
  })

  it('should extract false', () => {
    expectTypeOf<TestSubject>().extract<false>().not.toBeNever()
  })
})
