/**
 * @file Type Tests - Join
 * @module tutils/types/tests/unit-d/Join
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../join'
import type Joinable from '../joinable'
import type NIL from '../nil'
import type Nullable from '../nullable'
import type { tag as opaque } from '../opaque'
import type Optional from '../optional'

describe('unit-d:types/Join', () => {
  it('should equal string if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string>()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  describe('T extends NIL', () => {
    it('should equal EmptyString', () => {
      expectTypeOf<TestSubject<null>>().toEqualTypeOf<EmptyString>()
      expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<EmptyString>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type Vehicles = [Vehicle, Vehicle, Vehicle]

      describe('T extends Readonly<EmptyArray>', () => {
        it('should equal EmptyString', () => {
          // Arrange
          type T1 = EmptyArray
          type T2 = Readonly<T1>

          // Expect
          expectTypeOf<TestSubject<T1>>().toEqualTypeOf<EmptyString>()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<EmptyString>()
        })
      })

      describe('T extends readonly (Objectify<any> | symbol)[]', () => {
        it('should construct string delimited by Fallback<S, ",", NIL>', () => {
          // Arrange
          type Expect = `${string},${string},${string}`

          // Expect
          expectTypeOf<TestSubject<Vehicles>>().toEqualTypeOf<Expect>()
        })
      })

      describe('T extends readonly Joinable[]', () => {
        type S = Dot

        it('should construct string delimited by Fallback<S, ",", NIL>', () => {
          // Arrange
          type T1 = [Optional<'hello'>, NIL, Nullable<'world'>]
          type T2 = ['foo', undefined, 'bar', null, 'baz']
          type T3 = ['prefix', ...string[]]
          type T4 = ['data', Indices<Vehicles>]
          type T5 = [...T4, keyof Vehicle]
          type E1 = '..' | '..world' | 'hello..' | 'hello..world'
          type E2 = `${T2[0]}${S}${S}${T2[2]}${S}${S}${T2[4]}`
          type E3 = `${T3[0]}${S}${string}`
          type E4 = `${T4[0]}${S}${Indices<Vehicles>}`
          type E5 = `${E4}${S}${keyof Vehicle}`

          // Expect
          expectTypeOf<TestSubject<T1, S>>().toEqualTypeOf<E1>()
          expectTypeOf<TestSubject<T2, S>>().toEqualTypeOf<E2>()
          expectTypeOf<TestSubject<T3, S>>().toEqualTypeOf<E3>()
          expectTypeOf<TestSubject<T4, S>>().toEqualTypeOf<E4>()
          expectTypeOf<TestSubject<T5, S>>().toEqualTypeOf<E5>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      describe('T extends readonly (Objectify<any> | symbol)[]', () => {
        it('should equal string', () => {
          // Arrange
          type T = readonly (Fn<[string], Vehicle> | Vehicle | typeof opaque)[]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<string>()
        })
      })

      describe('T extends readonly Joinable[]', () => {
        it('should equal string', () => {
          // Arrange
          type T = NonNullable<Joinable>[]

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<string>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = ['foo', 'bar'] | ['hello', 'world']
      type S = Dot | '_'
      type Expect = `foo${S}bar` | `hello${S}world`

      // Expect
      expectTypeOf<TestSubject<T, S>>().toEqualTypeOf<Expect>()
    })
  })
})
