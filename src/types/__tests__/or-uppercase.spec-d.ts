/**
 * @file Type Tests - OrUppercase
 * @module tutils/types/tests/unit-d/OrUppercase
 */

import type TestSubject from '../or-uppercase'

describe('unit-d:types/OrUppercase', () => {
  type T = 'and' | 'or'

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().not.toBeNever()
  })

  it('should extract Uppercase<T>', () => {
    expectTypeOf<TestSubject<T>>().extract<Uppercase<T>>().not.toBeNever()
  })
})
