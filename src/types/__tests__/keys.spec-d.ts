/**
 * @file Type Tests - Keys
 * @module tutils/types/tests/unit-d/Keys
 */

import type Person from '#fixtures/interfaces/person'
import type Vehicle from '#fixtures/types/vehicle'
import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Join from '../join'
import type TestSubject from '../keys'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Numeric from '../numeric'
import type Omit from '../omit'
import type Opaque from '../opaque'
import type { tag as opaque } from '../opaque'
import type Partial from '../partial'
import type Spread from '../spread'

describe('unit-d:types/Keys', () => {
  it('should equal EmptyArray if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal EmptyArray if T is unknown', () => {
    // Arrange
    type T = unknown

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal string[] if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string[]>()
  })

  describe('T extends ObjectCurly', () => {
    it('should construct enumerable string-keyed property array', () => {
      // Arrange
      type T = Partial<Opaque<Vehicle>>
      type Expect = Exclude<keyof T, symbol>[]

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })

    it('should equal EmptyArray if EmptyObject extends T', () => {
      expectTypeOf<TestSubject<{}>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<EmptyArray>()
    })

    it('should equal string[] if IsEqual<T, object> extends true', () => {
      expectTypeOf<TestSubject<object>>().toEqualTypeOf<string[]>()
    })

    describe('K["deep"] extends true', () => {
      it('should construct enumerable string-keyed paths array', () => {
        // Arrange
        type T = { res: { data: Opaque<Vehicle> } }

        // Expect
        expectTypeOf<TestSubject<T, { deep: true }>>().toEqualTypeOf<
          (
            | Join<[keyof T, 'data', keyof Omit<Vehicle, 'year'>, number], Dot>
            | Join<[keyof T, 'data', keyof Vehicle], Dot>
            | Join<[keyof T, 'data'], Dot>
            | keyof T
          )[]
        >()
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
        it('should equal (keyof Spread<T>)[]', () => {
          // Arrange
          type T = 'vin'

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<(keyof Spread<T>)[]>()
        })

        it('should equal EmptyArray if T extends EmptyString', () => {
          expectTypeOf<TestSubject<EmptyString>>().toEqualTypeOf<EmptyArray>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should equal Numeric[]', () => {
          // Arrange
          type T = Vehicle['vin']

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Numeric[]>()
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
    it('should construct enumerable string-keyed property array', () => {
      // Arrange
      type T = Readonly<Fn & { id: string }>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<(keyof Spread<T>)[]>()
    })

    it('should equal EmptyArray if Fn extends T', () => {
      expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<Readonly<Fn>>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should construct enumerable string-keyed property array', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]
        type Expect = (keyof Spread<T>)[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })

      it('should equal EmptyArray if T extends readonly never[]', () => {
        // Arrange
        type T1 = EmptyArray
        type T2 = Readonly<T1>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyArray>()
      })

      describe('K["deep"] extends true', () => {
        it('should construct enumerable string-keyed paths array', () => {
          // Arrange
          type T = Partial<[Vehicle, 'vin', Vehicle['vin']]>

          // Expect
          expectTypeOf<TestSubject<T, { deep: true }>>().toEqualTypeOf<
            (
              | Join<[0 | 1 | 2], EmptyString>
              | Join<[0, keyof Omit<Vehicle, 'year'>, number], Dot>
              | Join<[0, keyof Vehicle], Dot>
              | Join<[1, 0 | 1 | 2], Dot>
              | Join<[2, number], Dot>
            )[]
          >()
        })
      })
    })

    describe('number extends Length<T>', () => {
      it('should construct enumerable string-keyed property array', () => {
        // Arrange
        type T = readonly Vehicle[]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<(keyof Spread<T>)[]>()
      })

      it('should equal EmptyArray if T extends readonly never[]', () => {
        // Arrange
        type T1 = never[]
        type T2 = Readonly<T1>

        // Expect
        expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyArray>()
        expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyArray>()
      })

      describe('K["deep"] extends true', () => {
        it('should construct enumerable string-keyed paths array', () => {
          // Arrange
          type T = Partial<Vehicle[]>

          // Expect
          expectTypeOf<TestSubject<T, { deep: true }>>().toEqualTypeOf<
            (
              | Join<[number, keyof Omit<Vehicle, 'year'>, number], Dot>
              | Join<[number, keyof Vehicle], Dot>
              | Join<[number], EmptyString>
            )[]
          >()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<Opaque<Person> | Opaque<Vehicle>>
      type Expect = (keyof Person)[] | (keyof Vehicle)[] | EmptyArray

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
