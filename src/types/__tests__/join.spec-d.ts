/**
 * @file Type Tests - Join
 * @module tutils/types/tests/unit-d/Join
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Indices from '../indices'
import type TestSubject from '../join'
import type NIL from '../nil'
import type Nullable from '../nullable'
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

  describe('T extends readonly Joinable[]', () => {
    type Vehicles = [Vehicle, Vehicle, Vehicle]

    it('should equal T.join(S)', () => {
      // Arrange
      type T1 = Readonly<EmptyArray>
      type T2 = [1, 2, 3]
      type T3 = [1n, 2n, 3n]
      type T4 = [false, true, false, true]
      type T5 = [Optional<'hello'>, NIL, Nullable<'world'>]
      type T6 = ['foo', undefined, 'bar', null, 'baz']
      type T7 = ['prefix', ...string[]]
      type T8 = ['data', Indices<Vehicles>]
      type T9 = [...T8, keyof Vehicle]
      type E1 = EmptyString
      type E2 = `${T2[0]}${Dot}${T2[1]}${Dot}${T2[2]}`
      type E3 = E2
      type E4 = `${T4[0]}${Dot}${T4[1]}${Dot}${T4[2]}${Dot}${T4[3]}`
      type E5 = '..' | '..world' | 'hello..' | 'hello..world'
      type E6 = `${T6[0]}${Dot}${Dot}${T6[2]}${Dot}${Dot}${T6[4]}`
      type E7 = `${T7[0]}${Dot}${string}`
      type E8 = `${T8[0]}${Dot}${Indices<Vehicles>}`
      type E9 = `${E8}${Dot}${keyof Vehicle}`

      // Expect
      expectTypeOf<TestSubject<T1, Dot>>().toEqualTypeOf<E1>()
      expectTypeOf<TestSubject<T2, Dot>>().toEqualTypeOf<E2>()
      expectTypeOf<TestSubject<T3, Dot>>().toEqualTypeOf<E3>()
      expectTypeOf<TestSubject<T4, Dot>>().toEqualTypeOf<E4>()
      expectTypeOf<TestSubject<T5, Dot>>().toEqualTypeOf<E5>()
      expectTypeOf<TestSubject<T6, Dot>>().toEqualTypeOf<E6>()
      expectTypeOf<TestSubject<T7, Dot>>().toEqualTypeOf<E7>()
      expectTypeOf<TestSubject<T8, Dot>>().toEqualTypeOf<E8>()
      expectTypeOf<TestSubject<T9, Dot>>().toEqualTypeOf<E9>()
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
