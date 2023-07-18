/**
 * @file Type Tests - IsReadonlyKey
 * @module tutils/types/tests/unit-d/IsReadonlyKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Vehicle from '#fixtures/types/vehicle'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../is-key-readonly'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type { tag } from '../opaque'
import type Optional from '../optional'
import type Stringify from '../stringify'

describe('unit-d:types/IsReadonlyKey', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<Author, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<Author, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any, 'first_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, 'first_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, 'first_name'>>().toEqualTypeOf<false>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<{}, 'isbn'>>().toEqualTypeOf<false>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      type K1 = 'data.-1.author.display_name'
      type K2 = 'data.-1.author.email'
      type K3 = 'data.-1.author.first_name'

      it('should equal false if K is not nested readonly key', () => {
        // Arrange
        type T = { data: { [-1]: { author: Author } } }

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<false>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<false>()
        expectTypeOf<TestSubject<T, K3>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested readonly key', () => {
        // Arrange
        type T = { data: { [-1]: { author: Optional<Readonly<Author>> } } }

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, K3>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      it('should equal false if K is not readonly key', () => {
        // Arrange
        type T = Author & { [tag]: 'author' }

        // Expect
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is readonly key', () => {
        // Arrange
        type T = Readonly<Author & { [tag]: 'author' }>

        // Expect
        expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends Primitive', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<null, 'toString'>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<undefined, 'valueOf'>>().toEqualTypeOf<false>()
    })

    describe('T extends bigint', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0n & {
          x: {
            readonly a: string
            readonly b?: string
            readonly c?: string | undefined
            d: string
            e?: string
          }
        }

        it('should equal false if K is not nested readonly key', () => {
          expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type K1 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
          type K2 = `x.${keyof T['x']}.length`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1n & {
          readonly a: string
          readonly b?: string
          readonly c?: string | undefined
        }

        it('should equal false if K is not readonly key', () => {
          // Arrange
          type K = Exclude<keyof T, typeof Symbol.toStringTag | 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type K = Extract<keyof T, typeof Symbol.toStringTag | 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = false & {
          x: {
            readonly a: string
            readonly b?: string
            readonly c?: string | undefined
            d: string
            e?: string
          }
        }

        it('should equal false if K is not nested readonly key', () => {
          expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type K1 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
          type K2 = `x.${keyof T['x']}.length`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = true & {
          readonly a: string
          readonly b?: string
          readonly c?: string | undefined
        }

        it('should equal false if K is not readonly key', () => {
          // Arrange
          type K = Exclude<keyof T, 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type K = Extract<keyof T, 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends number', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0 & {
          x: {
            readonly a: string
            readonly b?: string
            readonly c?: string | undefined
            d: string
            e?: string
          }
        }

        it('should equal false if K is not nested readonly key', () => {
          expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type K1 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
          type K2 = `x.${keyof T['x']}.length`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1 & {
          readonly a: string
          readonly b?: string
          readonly c?: string | undefined
        }

        it('should equal false if K is not readonly key', () => {
          // Arrange
          type K = Exclude<keyof T, 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type K = Extract<keyof T, 'a' | 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        type T = 'xyz'

        describe('K extends keyof T', () => {
          it('should equal false if K is not readonly key', () => {
            // Arrange
            type K = Exclude<keyof T, 'length'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is readonly key', () => {
            // Arrange
            type K = Extract<keyof T, 'length'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })
      })

      describe('number extends Length<T>', () => {
        describe('K extends `${infer H}.${infer R}`', () => {
          type T = string & {
            x: {
              readonly a: string
              readonly b?: string
              readonly c?: string | undefined
              d: string
              e?: string
            }
          }

          it('should equal false if K is not nested readonly key', () => {
            expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested readonly key', () => {
            // Arrange
            type K1 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
            type K2 = `x.${keyof T['x']}.length`

            // Expect
            expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
            expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          type T = string & {
            readonly a: string
            readonly b?: string
            readonly c?: string | undefined
          }

          it('should equal false if K is not readonly key', () => {
            // Arrange
            type K = Exclude<keyof T, 'a' | 'b' | 'c' | 'length'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is readonly key', () => {
            // Arrange
            type K = Extract<keyof T, 'a' | 'b' | 'c' | 'length'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = symbol & {
          x: {
            readonly a: string
            readonly b?: string
            readonly c?: string | undefined
            d: string
            e?: string
          }
        }

        it('should equal false if K is not nested readonly key', () => {
          expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type K1 = 'description.length'
          type K2 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
          type K3 = `x.${keyof T['x']}.length`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K3>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = symbol & {
          readonly a: string
          readonly b?: string
          readonly c?: string | undefined
        }

        it('should equal false if K is not readonly key', () => {
          // Arrange
          type K = Exclude<
            keyof T,
            typeof Symbol.toStringTag | 'a' | 'b' | 'c' | 'description'
          >

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type K = Extract<
            keyof T,
            typeof Symbol.toStringTag | 'a' | 'b' | 'c' | 'description'
          >

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Readonly<Fn> & {
        x: {
          readonly a: string
          readonly b?: string
          readonly c?: string | undefined
          d: string
          e?: string
        }
      }

      it('should equal false if K is not nested readonly key', () => {
        expectTypeOf<TestSubject<T, 'x.d' | 'x.e'>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested readonly key', () => {
        // Arrange
        type K1 = `x.${Exclude<keyof T['x'], 'd' | 'e'>}`
        type K2 = `x.${keyof T['x']}.length`

        // Expect
        expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      it('should equal false if K is not readonly key', () => {
        // Arrange
        type T = Fn
        type K = Exclude<keyof T, 'length' | 'name'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is readonly key', () => {
        // Arrange
        type T1 = Fn
        type T2 = Readonly<T1>

        // Expect
        expectTypeOf<TestSubject<T1, 'length' | 'name'>>().toEqualTypeOf<true>()
        expectTypeOf<TestSubject<T2, keyof T2>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = [Vehicle, Readonly<Vehicle>?]

        it('should equal false if K is not nested readonly key', () => {
          // Arrange
          type K = `${Stringify<-2 | 0>}.${keyof Vehicle}`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type K = `${Stringify<-1 | 1>}.${keyof Vehicle}`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Indices<T>', () => {
        it('should equal false if K is not readonly key', () => {
          // Arrange
          type T = [Vehicle, Nilable<Vehicle>, Vehicle?]

          // Expect
          expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type T = readonly [Vehicle, Nilable<Vehicle>, Vehicle?]

          // Expect
          expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Stringify<Indices<T>>', () => {
        it('should equal false if K is not readonly key', () => {
          // Arrange
          type T = [Vehicle, Nilable<Vehicle>, Vehicle?]
          type K = Stringify<Indices<T>>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type T = readonly [Vehicle, Nilable<Vehicle>, Vehicle?]
          type K = Stringify<Indices<T>>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        it('should equal false if K is not readonly key', () => {
          // Arrange
          type T = [Vehicle, Vehicle?]
          type K = Exclude<keyof T, typeof Symbol.unscopables>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type T = readonly [Vehicle, Vehicle?]
          type K = Stringify<Indices<T>> | typeof Symbol.unscopables | 'length'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('number extends Length<T>', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal false if K is not nested readonly key', () => {
          // Arrange
          type T = Vehicle[]
          type K = `${Numeric}.${keyof Vehicle}`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested readonly key', () => {
          // Arrange
          type T = Readonly<Vehicle>[]
          type K = `${Numeric}.${keyof Vehicle}`

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = Vehicle[]

        it('should equal false if K is not readonly key', () => {
          // Arrange
          type K = Exclude<keyof T, typeof Symbol.unscopables>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is readonly key', () => {
          // Arrange
          type K = Extract<keyof T, typeof Symbol.unscopables>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Readonly<Book> | Readonly<Vehicle>
      type K = 'isbn' | 'vin'

      // Expect
      expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<boolean>()
    })
  })
})
