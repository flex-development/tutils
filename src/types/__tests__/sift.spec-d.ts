/**
 * @file Type Tests - Sift
 * @module tutils/types/tests/unit-d/Sift
 */

import type EmptyArray from '../empty-array'
import type Falsy from '../falsy'
import type Nilable from '../nilable'
import type TestSubject from '../sift'

describe('unit-d:types/Sift', () => {
  it('should equal EmptyArray if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T if Falsy does not extend T[number]', () => {
    // Arrange
    type T = ['a', 'b', 'c']

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  it('should equal T if T extends Readonly<EmptyArray>', () => {
    // Arrange
    type T1 = EmptyArray
    type T2 = Readonly<EmptyArray>

    // Expect
    expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
    expectTypeOf<TestSubject<T2>>().toEqualTypeOf<T2>()
  })

  describe('Falsy extends T[number]', () => {
    it('should exclude Falsy from T[number]', () => {
      expectTypeOf<TestSubject<(Falsy | 13)[]>>().toEqualTypeOf<13[]>()
      expectTypeOf<TestSubject<[Falsy | 1 | 1n]>>().toEqualTypeOf<[1, 1n]>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<string>[] | [0, 1]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<string[] | [1]>()
    })
  })
})
