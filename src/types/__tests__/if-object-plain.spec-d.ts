/**
 * @file Type Tests - IfObjectPlain
 * @module tutils/types/tests/unit-d/IfObjectPlain
 */

import type Book from '#fixtures/interfaces/book'
import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../if-object-plain'
import type Nilable from '../nilable'

describe('unit-d:types/IfObjectPlain', () => {
  type F = 0
  type T = 1

  it('should equal F if IsObjectPlain<U> extends false', () => {
    expectTypeOf<TestSubject<Book, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsObjectPlain<U> extends true', () => {
    expectTypeOf<TestSubject<Vehicle, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Vehicle>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
