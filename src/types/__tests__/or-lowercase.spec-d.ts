/**
 * @file Type Tests - OrLowercase
 * @module tutils/types/tests/unit-d/OrLowercase
 */

import type TestSubject from '../or-lowercase'

describe('unit-d:types/OrLowercase', () => {
  type T = 'AND' | 'OR'

  it('should extract Lowercase<T>', () => {
    expectTypeOf<TestSubject<T>>().extract<Lowercase<T>>().not.toBeNever()
  })

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().not.toBeNever()
  })
})
