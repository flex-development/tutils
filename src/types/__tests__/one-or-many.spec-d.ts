/**
 * @file Type Tests - OneOrMany
 * @module tutils/types/tests/unit-d/OneOrMany
 */

import type TestSubject from '../one-or-many'

describe('unit-d:types/OneOrMany', () => {
  type T = string

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().toEqualTypeOf<T>()
  })

  it('should extract T[]', () => {
    expectTypeOf<TestSubject<T>>().extract<T[]>().toEqualTypeOf<T[]>()
  })
})
