/**
 * @file Type Tests - At
 * @module tutils/types/tests/unit-d/At
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../at'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'

describe('unit-d:types/At', () => {
  type F = undefined

  it('should equal F if K is out of range', () => {
    // Arrange
    type T1 = ['a', 'b', 'c']
    type T2 = 'abc'

    // Expect
    expectTypeOf<TestSubject<T1, '-4'>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T1, '3'>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T1, -4>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T1, 3>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T2, '-4'>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T2, '3'>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T2, -4>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<T2, 3>>().toEqualTypeOf<F>()
  })

  it('should equal F if T extends EmptyString', () => {
    expectTypeOf<TestSubject<EmptyString, 0>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<Readonly<EmptyString>, 0>>().toEqualTypeOf<F>()
  })

  it('should equal F if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray, 0>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<EmptyArray, 0>>().toEqualTypeOf<F>()
  })

  it('should equal F | T[number] if T is not string literal or tuple', () => {
    // Arrange
    type T1 = Author[]
    type T2 = string

    // Expect
    expectTypeOf<TestSubject<T1, '0'>>().toEqualTypeOf<F | T1[number]>()
    expectTypeOf<TestSubject<T1, 0>>().toEqualTypeOf<F | T1[number]>()
    expectTypeOf<TestSubject<T2, '1'>>().toEqualTypeOf<F | T2[number]>()
    expectTypeOf<TestSubject<T2, 1>>().toEqualTypeOf<F | T2[number]>()
  })

  it('should equal T.at(K)! if T is string literal or tuple', () => {
    // Arrange
    type T1 = [Author, Author]
    type T2 = 'def'

    // Expect
    expectTypeOf<TestSubject<T1, '1'>>().toEqualTypeOf<Author>()
    expectTypeOf<TestSubject<T1, '-1'>>().toEqualTypeOf<Author>()
    expectTypeOf<TestSubject<T1, 1>>().toEqualTypeOf<Author>()
    expectTypeOf<TestSubject<T1, -1>>().toEqualTypeOf<Author>()
    expectTypeOf<TestSubject<T2, '1'>>().toEqualTypeOf<'e'>()
    expectTypeOf<TestSubject<T2, '-1'>>().toEqualTypeOf<'d' | 'e' | 'f'>()
    expectTypeOf<TestSubject<T2, 1>>().toEqualTypeOf<'e'>()
    expectTypeOf<TestSubject<T2, -1>>().toEqualTypeOf<'d' | 'e' | 'f'>()
  })
})
