/**
 * @file Type Tests - OrUppercase
 * @module tutils/types/tests/unit-d/OrUppercase
 */

import type TestSubject from '../or-uppercase'

describe('unit-d:types/OrUppercase', () => {
  type T = 'crlf' | 'lf'

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().toEqualTypeOf<T>()
  })

  it('should extract Uppercase<T>', () => {
    expectTypeOf<TestSubject<T>>()
      .extract<Uppercase<T>>()
      .toEqualTypeOf<Uppercase<T>>()
  })
})
