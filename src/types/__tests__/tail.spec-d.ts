/**
 * @file Type Tests - Tail
 * @module tutils/types/tests/unit-d/Tail
 */

import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type TestSubject from '../tail'

describe('unit-d:types/Tail', () => {
  it('should equal never if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNever()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal T if T extends Readonly<EmptyArray>', () => {
      // Arrange
      type T1 = EmptyArray
      type T2 = Readonly<EmptyArray>

      // Expect
      expectTypeOf<TestSubject<T1>>().toEqualTypeOf<T1>()
      expectTypeOf<TestSubject<T2>>().toEqualTypeOf<T2>()
    })

    describe('T extends readonly [T[0]?, ...infer R]', () => {
      it('should equal R', () => {
        // Arrange
        type T1 = ['x']
        type T2 = ['x'?]
        type T3 = ['x', 'y', 'z']
        type T4 = ['x', 'y', 'z'?]
        type T5 = ['x'?, 'y'?, 'z'?]

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<T3>>().toEqualTypeOf<['y', 'z']>()
        expectTypeOf<TestSubject<T4>>().toEqualTypeOf<['y', 'z'?]>()
        expectTypeOf<TestSubject<T5>>().toEqualTypeOf<['y'?, 'z'?]>()
      })
    })
  })

  describe('T extends string', () => {
    it('should equal T if T extends EmptyString', () => {
      expectTypeOf<TestSubject<EmptyString>>().toEqualTypeOf<EmptyString>()
    })

    describe('T extends `${string}${D}${infer R}`', () => {
      it('should equal R', () => {
        expectTypeOf<TestSubject<'abc'>>().toEqualTypeOf<'bc'>()
        expectTypeOf<TestSubject<'a.b.c', Dot>>().toEqualTypeOf<'b.c'>()
      })
    })

    describe('string extends T', () => {
      it('should equal T', () => {
        // Arrange
        type T = string

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = 'data.message' | [number]
      type Expect = EmptyArray | 'message'

      // Expect
      expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<Expect>()
    })
  })
})
