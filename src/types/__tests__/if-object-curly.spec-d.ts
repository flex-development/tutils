/**
 * @file Type Tests - IfObjectCurly
 * @module tutils/types/tests/unit-d/IfObjectCurly
 */

import type Book from '#fixtures/book.interface'
import type TestSubject from '../if-object-curly'
import type Nilable from '../nilable'

describe('unit-d:types/IfObjectCurly', () => {
  type F = 0
  type T = 1

  it('should equal F if IsObjectCurly<U> extends false', () => {
    expectTypeOf<TestSubject<null, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsObjectCurly<U> extends true', () => {
    expectTypeOf<TestSubject<Book, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Book>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
