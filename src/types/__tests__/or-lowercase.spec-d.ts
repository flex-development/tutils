/**
 * @file Type Tests - OrLowercase
 * @module tutils/types/tests/unit-d/OrLowercase
 */

import type TestSubject from '../or-lowercase'

describe('unit-d:types/OrLowercase', () => {
  type T = 'CRLF' | 'LF'

  it('should extract Lowercase<T>', () => {
    expectTypeOf<TestSubject<T>>()
      .extract<Lowercase<T>>()
      .toEqualTypeOf<Lowercase<T>>()
  })

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().toEqualTypeOf<T>()
  })
})
