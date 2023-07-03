/**
 * @file Type Tests - Promisable
 * @module tutils/types/tests/unit-d/Promisable
 */

import type TestSubject from '../promisable'

describe('unit-d:types/Promisable', () => {
  type T = string

  it('should extract PromiseLike<T>', () => {
    expectTypeOf<TestSubject<T>>().extract<PromiseLike<T>>().not.toBeNever()
  })

  it('should extract T', () => {
    expectTypeOf<TestSubject<T>>().extract<T>().not.toBeNever()
  })
})
