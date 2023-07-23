/**
 * @file Type Tests - Invert
 * @module tutils/types/tests/unit-d/Invert
 */

import type EmptyObject from '../empty-object'
import type TestSubject from '../invert'
import type Nullable from '../nullable'
import type Objectify from '../objectify'

describe('unit-d:types/Invert', () => {
  it('should equal Objectify<T> if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  it('should equal Objectify<T> if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('T extends { [K in PropertyKey]?: Primitive }', () => {
    it('should construct object type with K and T[K] reversed', () => {
      // Arrange
      type T = {
        [x: number]: string | undefined
        readonly 0: 'a'
        1: 'b'
        2: 'c'
        3?: 'd'
        4?: 'e'
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
        [x: string]: number
        readonly a: 0
        b: 1
        c: 2
        d?: 3
        e?: 4
        undefined?: 3 | 4
      }>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
      })
    })
  })

  describe('T extends NIL', () => {
    it('should equal Objectify<T>', () => {
      // Arrange
      type T1 = null
      type T2 = undefined

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Objectify<T1>>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Objectify<T2>>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<{ readonly 0: 'a' }>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ readonly a: 0 } | {}>()
    })
  })
})
