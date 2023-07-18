/**
 * @file Type Tests - IsRequiredKey
 * @module tutils/types/tests/unit-d/IsRequiredKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type Vehicle from '#fixtures/types/vehicle'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Indices from '../indices'
import type TestSubject from '../is-key-required'
import type Nilable from '../nilable'
import type Numeric from '../numeric'
import type Partial from '../partial'
import type Stringify from '../stringify'

describe('unit-d:types/IsRequiredKey', () => {
  it('should equal false if K is any', () => {
    expectTypeOf<TestSubject<Author, any>>().toEqualTypeOf<false>()
  })

  it('should equal false if K is never', () => {
    expectTypeOf<TestSubject<Author, never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any, 'last_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never, 'last_name'>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown, 'last_name'>>().toEqualTypeOf<false>()
  })

  describe('T extends ObjectCurly', () => {
    it('should equal false if keyof T is never', () => {
      expectTypeOf<TestSubject<{}, 'vin'>>().toEqualTypeOf<false>()
    })

    describe('K extends `${infer H}.${infer R}`', () => {
      type T = Book

      it('should equal false if K is not nested required key', () => {
        // Arrange
        type K = `authors.${Numeric}.${'display_name' | 'email'}`

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is nested required key', () => {
        // Arrange
        type K = 'publisher.display_name.value'

        // Expect
        expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
      })
    })

    describe('K extends keyof T', () => {
      type T = Author

      it('should equal false if K is not required key', () => {
        expectTypeOf<TestSubject<T, 'display_name'>>().toEqualTypeOf<false>()
        expectTypeOf<TestSubject<T, 'email'>>().toEqualTypeOf<false>()
      })

      it('should equal true if K is required key', () => {
        expectTypeOf<TestSubject<T, 'last_name'>>().toEqualTypeOf<true>()
      })
    })
  })

  describe('T extends Primitive', () => {
    it('should equal false if Keyof<T> is never', () => {
      expectTypeOf<TestSubject<null, 'toString'>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<undefined, 'valueOf'>>().toEqualTypeOf<false>()
    })

    describe('T extends bigint', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0n & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1n & { b?: string; c?: string | undefined }

        it('should equal false if K is not required key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is required key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends boolean', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = false & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = true & { b?: string; c?: string | undefined }

        it('should equal false if K is not required key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is required key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends number', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = 0 & { x: { a: string; b?: string; c?: string | undefined } }

        it('should equal false if K is not nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.a'>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = 1 & { b?: string; c?: string | undefined }

        it('should equal false if K is not required key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is required key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends string', () => {
      describe('IsLiteral<T> extends true', () => {
        type T = 'xyz'

        describe('K extends Indices<T>', () => {
          it('should equal true', () => {
            // Arrange
            type K = Indices<T>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends Stringify<Indices<T>>', () => {
          it('should equal true', () => {
            // Arrange
            type K = Stringify<Indices<T>>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          it('should equal true', () => {
            expectTypeOf<TestSubject<T, keyof T>>().toEqualTypeOf<true>()
          })
        })
      })

      describe('number extends Indices<T>', () => {
        describe('K extends `${infer H}.${infer R}`', () => {
          type T = string & {
            x: { a: string; b?: string; c?: string | undefined }
          }

          it('should equal false if K is not nested required key', () => {
            expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested required key', () => {
            // Arrange
            type K = 'length.toFixed' | 'x.a'

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          type T = string & { b?: string; c?: string | undefined }

          it('should equal false if K is not required key', () => {
            expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is required key', () => {
            // Arrange
            type K = Exclude<keyof T, 'b' | 'c'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })
      })
    })

    describe('T extends symbol', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = symbol & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested required key', () => {
          // Arrange
          type K = 'description.length' | 'x.a'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = symbol & { b?: string; c?: string | undefined }

        it('should equal false if K is not required key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is required key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends Readonly<Fn>', () => {
      describe('K extends `${infer H}.${infer R}`', () => {
        type T = Readonly<Fn> & {
          x: { a: string; b?: string; c?: string | undefined }
        }

        it('should equal false if K is not nested required key', () => {
          expectTypeOf<TestSubject<T, 'x.b' | 'x.c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is nested required key', () => {
          // Arrange
          type K = 'length.toFixed' | 'x.a'

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })

      describe('K extends keyof T', () => {
        type T = Readonly<Fn> & { b?: string; c?: string | undefined }

        it('should equal false if K is not required key', () => {
          expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
        })

        it('should equal true if K is required key', () => {
          // Arrange
          type K = Exclude<keyof T, 'b' | 'c'>

          // Expect
          expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
        })
      })
    })

    describe('T extends readonly unknown[]', () => {
      describe('IsTuple<T> extends true', () => {
        type T = readonly [Vehicle, Nilable<Vehicle>, Partial<Vehicle>?]

        describe('K extends `${infer H}.${infer R}`', () => {
          it('should equal false if K is not nested required key', () => {
            // Arrange
            type K = `${Extract<Indices<T>, -1 | 2>}.${keyof Vehicle}`

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested required key', () => {
            // Arrange
            type K = `${Exclude<Indices<T>, -1 | 2>}.${keyof Vehicle}`

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends Indices<T>', () => {
          it('should equal false if K is not required key', () => {
            // Arrange
            type K = Extract<Indices<T>, -1 | 2>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is required key', () => {
            // Arrange
            type K = Exclude<Indices<T>, -1 | 2>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          it('should equal false if K is not required key', () => {
            expectTypeOf<TestSubject<T, '2'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is required key', () => {
            // Arrange
            type K = Exclude<keyof T, '2'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends Stringify<Indices<T>>', () => {
          it('should equal false if K is not required key', () => {
            expectTypeOf<TestSubject<T, '-1' | '2'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is required key', () => {
            // Arrange
            type K = Exclude<Stringify<Indices<T>>, '-1' | '2'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })
      })

      describe('number extends Indices<T>', () => {
        describe('K extends `${infer H}.${infer R}`', () => {
          type K = `${Numeric}.${keyof Vehicle}`

          it('should equal false if K is not nested required key', () => {
            // Arrange
            type T = Partial<Vehicle>[]

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is nested required key', () => {
            expectTypeOf<TestSubject<Vehicle[], K>>().toEqualTypeOf<true>()
          })
        })

        describe('K extends keyof T', () => {
          type T = Vehicle[] & { b?: string; c?: string | undefined }

          it('should equal false if K is not required key', () => {
            expectTypeOf<TestSubject<T, 'b' | 'c'>>().toEqualTypeOf<false>()
          })

          it('should equal true if K is required key', () => {
            // Arrange
            type K = Exclude<keyof T, 'b' | 'c'>

            // Expect
            expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<true>()
          })
        })
      })
    })

    describe('unions', () => {
      it('should distribute over unions', () => {
        // Arrange
        type K = `${EmptyString | 'authors.0.'}${'first_name' | 'last_name'}`

        // Expect
        expectTypeOf<TestSubject<Author | Book, K>>().toEqualTypeOf<boolean>()
      })
    })
  })
})
