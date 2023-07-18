/**
 * @file Type Tests - IsOptionalKey
 * @module tutils/types/tests/unit-d/IsOptionalKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../is-key-optional'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type Partial from '../partial'
import type PropertyKey from '../property-key'
import type Stringify from '../stringify'

describe('unit-d:types/IsOptionalKey', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<Author, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<Author, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any, 'email'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, 'email'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, 'email'>>().toEqualTypeOf<false>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<{}, PropertyKey>>().toEqualTypeOf<false>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Book

      it('should equal false if K is not nested optional key', () => {
        // Arrange
        type K = 'publisher.display_name.value'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested optional key', () => {
        // Arrange
        type K = `authors.${Numeric}.${'display_name' | 'email'}`

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      type T = Author

      it('should equal false if K is not optional key', () => {
        // Arrange
        type K = Exclude<keyof T, 'display_name' | 'email'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is optional key', () => {
        // Arrange
        type K = Extract<keyof T, 'display_name' | 'email'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
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
        type T = 0n & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1n & { b?: string; c?: string | undefined }

        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = false & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = true & { b?: string; c?: string | undefined }

        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends number', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0 & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1 & { b?: string; c?: string | undefined }

        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        it('should equal false given any K', () => {
          // Arrange
          type T = 'xyz'

          // Expect
          expectTypeOf<TestSubject<T, Indices<T>>>().toEqualTypeOf<false>()
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<false>()
        })
      })

      describe('number extends Indices<T>', () => {
        describe('K extends `${infer H}.${infer R}`', () => {
          type T = string & {
            x: { a: string; b?: string; c?: string | undefined }
          }

          it('should equal false if K is not nested optional key', () => {
            // Arrange
            type K = 'length.toFixed' | 'x.a'

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested optional key', () => {
            expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          type T = string & { b?: string; c?: string | undefined }

          it('should equal false if K is not optional key', () => {
            // Arrange
            type K = Exclude<keyof T, 'b' | 'c'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is optional key', () => {
            expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = symbol & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested optional key', () => {
          // Arrange
          type K = 'description.length' | 'x.a'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = symbol & { b?: string; c?: string | undefined }

        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('T extends Readonly<Fn>', () => {
    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Readonly<Fn> & {
        x: { a: string; b?: string; c?: string | undefined }
      }

      it('should equal false if K is not nested optional key', () => {
        // Arrange
        type K = 'length.toFixed' | 'x.a'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested optional key', () => {
        expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      type T = Readonly<Fn> & { b?: string; c?: string | undefined }

      it('should equal false if K is not optional key', () => {
        // Arrange
        type K = Exclude<keyof T, 'b' | 'c'>

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is optional key', () => {
        expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends readonly unknown[]', () => {
    describe('IsTuple<T> extends true', () => {
      type T = readonly [Author, Nilable<Author>, Author?]

      describe('K extends `${infer H}.${infer R}`', () => {
        it('should equal false if K is not nested optional key', () => {
          // Arrange
          type K1 = `${Indices<T>}.${'first_name' | 'last_name'}`
          type K2 = `${Numeric}.${'first_name' | 'last_name'}`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<false>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          // Arrange
          type K1 = `${Indices<T>}.${'display_name' | 'email'}`
          type K2 = `${Numeric}.${'display_name' | 'email'}`

          // Expect
          expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<true>()
          expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Indices<T>', () => {
        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<Indices<T>, -1 | 2>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, -1 | 2>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        it('should equal false if K is not optional key', () => {
          // Arrange
          type T = readonly [Author]

          // Expect
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          // Arrange
          type T = readonly [Author] & { b?: string; c?: string | undefined }

          // Expect
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends Stringify<Indices<T>>', () => {
        it('should equal false if K is not optional key', () => {
          // Arrange
          type K = Exclude<Stringify<Indices<T>>, '-1' | '2'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          expectTypeOf<TestSubject<T, '-1' | '2'>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('number extends Indices<T>', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type K = `${Numeric}.${keyof Vehicle}`

        it('should equal false if K is not nested optional key', () => {
          expectTypeOf<TestSubject<Vehicle[], K>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested optional key', () => {
          // Arrange
          type T = readonly Partial<Vehicle>[]

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        it('should equal false if K is not optional key', () => {
          // Arrange
          type T = Partial<Vehicle[]>

          // Expect
          expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is optional key', () => {
          // Arrange
          type T = Partial<Vehicle[]> & { b?: string; c?: string | undefined }

          // Expect
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<true>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type K = `${EmptyString | 'authors.0.'}${'display_name' | 'email'}`

      // Expect
      expectTypeOf<TestSubject<Author | Book, K>>().toEqualTypeOf<boolean>()
    })
  })
})
