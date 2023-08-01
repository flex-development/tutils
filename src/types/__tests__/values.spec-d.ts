/**
 * @file Type Tests - Values
 * @module tutils/types/tests/unit-d/Values
 */

import type Book from '#fixtures/interfaces/book'
import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Nullable from '../nullable'
import type Opaque from '../opaque'
import type { tag as opaque } from '../opaque'
import type Spread from '../spread'
import type Stringify from '../stringify'
import type TestSubject from '../values'

describe('unit-d:types/Values', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal T[] if T is any', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })

  it('should equal any[] if IsEqual<T, object> extends true', () => {
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<any[]>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
      // Arrange
      type T = Book
      type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })

    describe('EmptyObject extends T', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends bigint', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<0n>>().toEqualTypeOf<EmptyArray>()
      })

      describe('T extends object', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = Opaque<bigint, symbol> & { id?: string }
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends boolean', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<false>>().toEqualTypeOf<EmptyArray>()
      })

      describe('T extends object', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = Opaque<true, symbol> & { id?: string }
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends number', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<0>>().toEqualTypeOf<EmptyArray>()
      })

      describe('T extends object', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = Opaque<number, symbol> & { id?: string }
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = 'vin'
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = Vehicle['vin']
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<typeof opaque>>().toEqualTypeOf<EmptyArray>()
      })

      describe('T extends object', () => {
        it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
          // Arrange
          type T = Opaque<symbol, symbol> & { id?: string }
          type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal Spread<T>[Stringify<keyof Spread<T>>][]', () => {
      // Arrange
      type T = Readonly<Fn & { id: string }>
      type Expect = Spread<T>[Stringify<keyof Spread<T>>][]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })

    describe('Fn extends T', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<Readonly<Fn>>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal T', () => {
        // Arrange
        type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal T', () => {
        // Arrange
        type T = readonly Nullable<Vehicle>[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Person | Vehicle
      type Expect = Person[keyof Person][] | Vehicle[keyof Vehicle][]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
