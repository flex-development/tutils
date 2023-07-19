/**
 * @file Type Tests - Flat
 * @module tutils/types/tests/unit-d/Flat
 */

import type EmptyArray from '../empty-array'
import type TestSubject from '../flat'
import type Nilable from '../nilable'

describe('unit-d:types/Flat', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T[] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should equal T if D is never', () => {
    // Arrange
    type T = [0, [1, 2]]

    // Expect
    expectTypeOf<TestSubject<T, never>>().toEqualTypeOf<T>()
  })

  describe('T extends NIL', () => {
    it('should equal EmptyArray', () => {
      expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<null, never>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<undefined, never>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct flattened array', () => {
        // Arrange
        type T = readonly [[0, 1, [2, [[3, [4]], 5]], [[6], [7, [8, [9]]]]]]
        type E1 = [0, 1, [2, [[3, [4]], 5]], [[6], [7, [8, [9]]]]]
        type E2 = [0, 1, 2, [3, [4]], 5, 6, 7, [8, [9]]]
        type E3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<E1>()
        expectTypeOf<TestSubject<T, 3>>().toEqualTypeOf<E2>()
        expectTypeOf<TestSubject<T, 100>>().toEqualTypeOf<E3>()
      })

      describe('D extends NIL', () => {
        it('should flatten T once', () => {
          // Arrange
          type T = readonly [1, [[2], [[3, [4]], 5]]]
          type Expect = [1, [2], [[3, [4]], 5]]

          // Expect
          expectTypeOf<TestSubject<T, null>>().toEqualTypeOf<Expect>()
          expectTypeOf<TestSubject<T, undefined>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends D', () => {
        it('should flatten T once', () => {
          // Arrange
          type T = readonly [[1, [2]], [3, [4]], 5]
          type Expect = [1, [2], 3, [4], 5]

          // Expect
          expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      it('should construct flattened array', () => {
        // Arrange
        type T = (4[][] | 1 | 2 | 3)[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<(4[] | 1 | 2 | 3)[]>()
        expectTypeOf<TestSubject<T, 100>>().toEqualTypeOf<(1 | 2 | 3 | 4)[]>()
      })

      describe('D extends NIL', () => {
        it('should flatten T once', () => {
          // Arrange
          type T = (4[][] | 1 | 2 | [[3]])[]
          type Expect = (4[] | 1 | 2 | [[3]])[]

          // Expect
          expectTypeOf<TestSubject<T, null>>().toEqualTypeOf<Expect>()
          expectTypeOf<TestSubject<T, undefined>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends D', () => {
        it('should flatten T once', () => {
          // Arrange
          type T = ((1 | 2)[] | (3[] | 4 | 5)[])[]
          type Expect = (3[] | 1 | 2 | 4 | 5)[]

          // Expect
          expectTypeOf<TestSubject<T, number>>().toEqualTypeOf<Expect>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<readonly [1, [2, [[3, [4]], 5]]]>

      // Expect
      expectTypeOf<TestSubject<T, 3>>().toEqualTypeOf<[] | [1, 2, 3, [4], 5]>()
    })
  })
})
