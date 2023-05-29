/**
 * @file Type Tests - Keys
 * @module tutils/types/tests/unit-d/Keys
 */

import type Author from '#fixtures/author.interface'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../keys'
import type Numeric from '../numeric'
import type Simplify from '../simplify'
import type Timestamp from '../timestamp'

describe('unit-d:types/Keys', () => {
  it('should equal never if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray>>().toBeNever()
  })

  it('should equal never if T extends EmptyObject', () => {
    expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
  })

  it('should equal never if T extends EmptyString', () => {
    expectTypeOf<TestSubject<EmptyString>>().toBeNever()
  })

  it('should equal union if T extends ObjectCurly', () => {
    expectTypeOf<TestSubject<Author>>().toEqualTypeOf<keyof Author>()
    expectTypeOf<TestSubject<Error>>().toEqualTypeOf<keyof Error>()
    expectTypeOf<TestSubject<RangeError>>().toEqualTypeOf<keyof RangeError>()
    expectTypeOf<TestSubject<Simplify<Author>>>().toEqualTypeOf<keyof Author>()
  })

  it('should equal union if T extends Readonly<Exclude<B, Error>>', () => {
    // Arrange
    type B1 = Date
    type B2 = Map<any, any>
    class B3 extends Set<any> {}

    // Expect
    expectTypeOf<TestSubject<B1>>().toBeNever()
    expectTypeOf<TestSubject<B2>>().toBeNever()
    expectTypeOf<TestSubject<B3>>().toBeNever()
  })

  it('should equal union if T extends Readonly<Fn>', () => {
    // Arrange
    type F1 = Fn
    type F2 = Fn & { id: string }
    type F3 = Readonly<F2>

    // Expect
    expectTypeOf<TestSubject<F1>>().toBeNever()
    expectTypeOf<TestSubject<F2>>().toEqualTypeOf<'id'>()
    expectTypeOf<TestSubject<F3>>().toEqualTypeOf<'id'>()
  })

  it('should equal union if T extends Readonly<Primitive>', () => {
    // Arrange
    type P1 = boolean
    type P2 = string & { tag: string }
    type P3 = Readonly<P2>
    type P4 = Timestamp<'unix'>

    // Expect
    expectTypeOf<TestSubject<P1>>().toBeNever()
    expectTypeOf<TestSubject<P2>>().toEqualTypeOf<'tag'>()
    expectTypeOf<TestSubject<P3>>().toEqualTypeOf<'tag'>()
    expectTypeOf<TestSubject<P4>>().toBeNever()
  })

  it('should equal union if T extends readonly unknown[]', () => {
    // Arrange
    type A1 = Author[] | null
    type A2 = Author[] & { count: number }
    type A3 = [Author, Author] | null
    type A4 = EmptyArray
    type A5 = EmptyArray & { count: 0 }

    // Expect
    expectTypeOf<TestSubject<A1>>().toEqualTypeOf<Numeric>()
    expectTypeOf<TestSubject<A2>>().toEqualTypeOf<Numeric | 'count'>()
    expectTypeOf<TestSubject<A3>>().toEqualTypeOf<Indices<A3>>()
    expectTypeOf<TestSubject<A4>>().toEqualTypeOf<Indices<A4>>()
    expectTypeOf<TestSubject<A5>>().toEqualTypeOf<Indices<A5> | 'count'>()
  })
})
