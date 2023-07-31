/**
 * @file Type Tests - Spread
 * @module tutils/types/tests/unit-d/Spread
 */

import type Vehicle from '#fixtures/types/vehicle'
import type At from '../at'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Nilable from '../nilable'
import type Nullable from '../nullable'
import type Objectify from '../objectify'
import type Optional from '../optional'
import type TestSubject from '../spread'
import type Writable from '../writable'

describe('unit-d:types/Spread', () => {
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

  it('should equal Objectify<T> if T is unknown', () => {
    // Arrange
    type T = unknown

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
  })

  describe('T extends ObjectCurly', () => {
    describe('EmptyObject extends T', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<{}>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
      })
    })

    describe('Simplify<T> extends ObjectPlain', () => {
      it('should equal Writable<T>', () => {
        // Arrange
        type T = Readonly<Vehicle>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Writable<T>>()
      })
    })

    describe('T extends Readonly<BuiltIn>', () => {
      it('should enumerate properties of T', () => {
        // Arrange
        type T = Map<Vehicle['vin'], Vehicle> & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
      })
    })
  })

  describe('T extends Primitive', () => {
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

    describe('T extends bigint', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = bigint & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
      })
    })

    describe('T extends boolean', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = false & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
      })
    })

    describe('T extends number', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = number & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should spread T into object', () => {
          // Arrange
          type T = 'vin'

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
            [x: number]: At<T, number>
            '0': At<T, 0>
            '1': At<T, 1>
            '2': At<T, 2>
          }>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should spread T into object', () => {
          // Arrange
          type T = Vehicle['vin'] & { readonly id: string }
          type Expect = { [x: number]: Optional<string>; id: string }

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends symbol', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = symbol & { readonly id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should spread T into object', () => {
      // Arrange
      type T = Readonly<Fn & { id: string }>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{ id: string }>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = readonly [Vehicle, Nilable<Vehicle>, Nullable<Vehicle>?]

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
          [x: number]: At<T, number>
          '0': At<T, 0>
          '1': At<T, 1>
          '2'?: At<T, 2, never>
        }>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should spread T into object', () => {
        // Arrange
        type T = readonly Vehicle[] & { readonly id: string }
        type Expect = { [x: number]: Optional<Vehicle>; id: string }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nullable<['vin']>
      type Expect = { [x: number]: 'vin'; '0': 'vin' } | {}

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
