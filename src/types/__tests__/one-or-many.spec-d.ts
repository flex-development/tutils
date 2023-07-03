/**
 * @file Type Tests - OneOrMany
 * @module tutils/types/tests/unit-d/OneOrMany
 */

import type TestSubject from '../one-or-many'

describe('unit-d:types/OneOrMany', () => {
  type T = string

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().not.toBeNever()
  })

  it('should extract readonly T[]', () => {
    expectTypeOf<TestSubject<T>>().extract<readonly T[]>().not.toBeNever()
  })

  it('should match T[]', () => {
    expectTypeOf<T[]>().toMatchTypeOf<TestSubject<T>>()
    expectTypeOf<TestSubject<T>>().extract<T[]>().toBeNever()
  })
})
