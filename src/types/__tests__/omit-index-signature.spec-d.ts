/**
 * @file Type Tests - OmitIndexSignature
 * @module tutils/types/tests/unit-d/OmitIndexSignature
 */

import type Vehicle from '#fixtures/types/vehicle'
import type Dot from '../dot'
import type EmptyObject from '../empty-object'
import type Fn from '../fn'
import type Join from '../join'
import type Numeric from '../numeric'
import type Objectify from '../objectify'
import type Omit from '../omit'
import type TestSubject from '../omit-index-signature'
import type PropertyKey from '../property-key'
import type Stringify from '../stringify'
import type Times from '../times'

describe('unit-d:types/OmitIndexSignature', () => {
  it('should equal {} if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<{}>()
  })

  it('should equal {} if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<{}>()
  })

  it('should equal T if T is never', () => {
    // Arrange
    type T = never

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal {} if EmptyObject extends T', () => {
      expectTypeOf<TestSubject<{}>>().toEqualTypeOf<{}>()
      expectTypeOf<TestSubject<EmptyObject>>().toEqualTypeOf<{}>()
    })

    it('should remove index signatures from T', () => {
      // Arrange
      type T = {
        [x: Join<['data', string], Dot>]: string
        [x: Numeric]: number
        [x: Stringify<bigint>]: string
        [x: number]: number
        [x: string | symbol]: any
        hello: 'world'
        foo?: 'bar'
      }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
        hello: 'world'
        foo?: 'bar'
      }>()
    })
  })

  describe('T extends Primitive', () => {
    describe('T extends NIL', () => {
      it('should equal {}', () => {
        expectTypeOf<TestSubject<null>>().toEqualTypeOf<{}>()
        expectTypeOf<TestSubject<undefined>>().toEqualTypeOf<{}>()
      })
    })

    describe('T extends bigint', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = 0n

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('T extends object', () => {
        it('should remove index signatures from T', () => {
          // Arrange
          type T = bigint & { [x: PropertyKey]: any }
          type Expect = Omit<Objectify<T>, PropertyKey>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('bigint extends T', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = bigint

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = false

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('T extends object', () => {
        it('should remove index signatures from T', () => {
          // Arrange
          type T = true & { [x: PropertyKey]: any }
          type Expect = Omit<Objectify<T>, PropertyKey>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('boolean extends T', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = boolean

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })
    })

    describe('T extends number', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = 0

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })

      describe('T extends object', () => {
        it('should remove index signatures from T', () => {
          // Arrange
          type T = number & { [x: PropertyKey]: any }
          type Expect = Omit<Objectify<T>, PropertyKey>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends T', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = number

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal Omit<Objectify<T>, number>', () => {
          // Arrange
          type T = 'vehicle'
          type Expect = Omit<Objectify<T>, number>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('T extends object', () => {
        it('should remove index signatures from T', () => {
          // Arrange
          type T = string & { [x: string | symbol]: any }
          type Expect = Omit<Objectify<T>, PropertyKey>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('number extends Length<T>', () => {
        it('should equal Omit<Objectify<T>, number>', () => {
          // Arrange
          type T = string
          type Expect = Omit<Objectify<T>, number>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })
    })

    describe('T extends symbol', () => {
      describe('T extends object', () => {
        it('should remove index signatures from T', () => {
          // Arrange
          type T = symbol & { [x: PropertyKey]: any }
          type Expect = Omit<Objectify<T>, PropertyKey>

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
        })
      })

      describe('symbol extends T', () => {
        it('should equal Objectify<T>', () => {
          // Arrange
          type T = symbol

          // Expect
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    it('should equal Objectify<T> if Fn extends T', () => {
      // Arrange
      type T = Readonly<Fn>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Objectify<T>>()
    })

    it('should remove index signatures from T', () => {
      // Arrange
      type T = Readonly<Fn> & { [x: PropertyKey]: any }
      type Expect = Omit<Objectify<T>, PropertyKey>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      it('should equal Omit<Objectify<T>, number>', () => {
        // Arrange
        type T = Readonly<Times<5, Vehicle['vin']>>
        type Expect = Omit<Objectify<T>, number>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('number extends Length<T>', () => {
      it('should equal Omit<Objectify<T>, number>', () => {
        // Arrange
        type T = Vehicle[]
        type Expect = Omit<Objectify<T>, number>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = { [x: number]: number; a: 0 } | { [x: string]: number; z?: 25 }
      type Expect = { a: 0 } | { z?: 25 }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
