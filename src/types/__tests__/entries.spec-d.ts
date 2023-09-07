/**
 * @file Type Tests - Entries
 * @module tutils/types/tests/unit-d/Entries
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type At from '../at'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type TestSubject from '../entries'
import type Fn from '../fn'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type Opaque from '../opaque'
import type { tag as opaque } from '../opaque'
import type Optional from '../optional'
import type Partial from '../partial'

describe('unit-d:types/Entries', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<EmptyArray>()
  })

  describe('IsAny<T> extends true', () => {
    it('should equal [string, T][]', () => {
      // Arrange
      type T = any

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<[string, T][]>()
    })
  })

  describe('T extends ObjectCurly', () => {
    it('should construct array of enumerable string-keyed entries', () => {
      expectTypeOf<TestSubject<Opaque<Partial<Vehicle>>>>().toEqualTypeOf<
        (
          | ['make', Optional<Vehicle['make']>]
          | ['model', Optional<Vehicle['model']>]
          | ['vin', Optional<Vehicle['vin']>]
          | ['year', Optional<Vehicle['year']>]
        )[]
      >()
    })

    describe('EmptyObject extends T', () => {
      it('should equal EmptyArray', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('IsEqual<T, object> extends true', () => {
      it('should equal [string, any][]', () => {
        expectTypeOf<TestSubject<object>>().toEqualTypeOf<[string, any][]>()
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
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<0n>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<bigint & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if bigint extends T', () => {
        expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends boolean', () => {
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<false>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<true & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if boolean extends T', () => {
        expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends number', () => {
      it('should equal EmptyArray if IsLiteral<T> extends true', () => {
        expectTypeOf<TestSubject<0>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<number & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if number extends T', () => {
        expectTypeOf<TestSubject<number>>().toEqualTypeOf<EmptyArray>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = 'vin'
          type Expect = [['0', At<T, 0>], ['1', At<T, 1>], ['2', At<T, 2>]]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = Opaque<Vehicle['vin'] & { id: number }>
          type Expect = [Numeric, Optional<string>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should equal EmptyArray if IsUniqueSymbol<T> extends true', () => {
        expectTypeOf<TestSubject<typeof opaque>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if T extends object', () => {
        // Arrange
        type T = Opaque<symbol & { id: string }>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
      })

      it('should equal EmptyArray if symbol extends T', () => {
        expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<EmptyArray>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should construct array of enumerable string-keyed entries', () => {
      // Arrange
      type T = Readonly<Fn> & { data: number; id: string }
      type Expect = (['data', T['data']] | ['id', T['id']])[]

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
      describe('IsNumeric<keyof Spread<T>> extends true', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = readonly [Vehicle, Nullable<Vehicle>, Vehicle?]
          type Expect = [['0', At<T, 0>], ['1', At<T, 1>], ['2', At<T, 2>]?]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('T extends readonly never[]', () => {
        it('should equal EmptyArray', () => {
          // Arrange
          type T1 = EmptyArray
          type T2 = Readonly<T1>

          // Expect
          expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyArray>()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyArray>()
        })
      })

      describe('boolean extends IsNumeric<keyof Spread<T>>', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = Opaque<{ id: string } & [Vehicle, Vehicle?]>
          type Expect = [['0', At<T, 0>], ['1', At<T, 1>]?, ...['id', string][]]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      describe('IsNumeric<keyof Spread<T>> extends true', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = Vehicle[]
          type Expect = [Numeric, Optional<T[0]>][]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('T extends readonly never[]', () => {
        it('should equal EmptyArray', () => {
          // Arrange
          type T1 = never[]
          type T2 = Readonly<T1>

          // Expect
          expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyArray>()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyArray>()
        })
      })

      describe('boolean extends IsNumeric<keyof Spread<T>>', () => {
        it('should construct array of enumerable string-keyed entries', () => {
          // Arrange
          type T = Opaque<Vehicle[] & { id: string }>
          type Expect = (['id', string] | [Numeric, Optional<Vehicle>])[]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Person | Vehicle>>>().toEqualTypeOf<
        | (
          | ['age', Person['age']]
          | ['friends', Person['friends']]
          | ['name', Person['name']]
        )[]
        | (
          | ['make', Vehicle['make']]
          | ['model', Vehicle['model']]
          | ['vin', Vehicle['vin']]
          | ['year', Vehicle['year']]
        )[]
        | EmptyArray
      >()
    })
  })
})
