/**
 * @file Type Tests - OneOrMany
 * @module tutils/types/tests/unit-d/OneOrMany
 */

import type TestSubject from '../one-or-many'

describe('unit-d:types/OneOrMany', () => {
  type T = string

  it('should match T', () => {
    expectTypeOf<T>().toMatchTypeOf<TestSubject<T>>()
  })

  it('should match T[]', () => {
    expectTypeOf<T[]>().toMatchTypeOf<TestSubject<T>>()
  })

  it('should match readonly T[]', () => {
    expectTypeOf<readonly T[]>().toMatchTypeOf<TestSubject<T>>()
  })
})
