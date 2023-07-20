/**
 * @file Type Tests - Split
 * @module tutils/types/tests/unit-d/Split
 */

import type { Sep } from '@flex-development/pathe'
import type Dot from '../dot'
import type EmptyArray from '../empty-array'
import type EmptyString from '../empty-string'
import type Optional from '../optional'
import type TestSubject from '../split'

describe('unit-d:types/Split', () => {
  it('should equal EmptyArray if T is never', () => {
    expectTypeOf<TestSubject<never, Dot>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal string[] if T is any', () => {
    expectTypeOf<TestSubject<any, Dot>>().toEqualTypeOf<string[]>()
  })

  describe('T extends NIL', () => {
    it('should equal EmptyArray', () => {
      expectTypeOf<TestSubject<null, Dot>>().toEqualTypeOf<EmptyArray>()
      expectTypeOf<TestSubject<undefined, Dot>>().toEqualTypeOf<EmptyArray>()
    })
  })

  describe('T extends string', () => {
    describe('IsLiteral<T> extends true', () => {
      describe('S extends RegExp', () => {
        it('should equal string[]', () => {
          expectTypeOf<TestSubject<'a.b.c', RegExp>>().toEqualTypeOf<string[]>()
        })
      })

      describe('S extends string', () => {
        it('should equal EmptyArray if T and S extend EmptyString', () => {
          // Arrange
          type T = EmptyString

          // Expect
          expectTypeOf<TestSubject<T, T>>().toEqualTypeOf<EmptyArray>()
        })

        it('should equal T.split(S)', () => {
          // Arrange
          type T = Lowercase<'0.X.Y'>

          // Expect
          expectTypeOf<TestSubject<T, Sep>>().toEqualTypeOf<[T]>()
          expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<['0', 'x', 'y']>()
        })

        describe('string extends S', () => {
          it('should equal string[]', () => {
            expectTypeOf<TestSubject<'x.y', string>>().toEqualTypeOf<string[]>()
          })
        })
      })

      describe('S extends undefined', () => {
        it('should equal [T]', () => {
          // Arrange
          type T1 = EmptyString
          type T2 = 'a.b.c'

          // Expect
          expectTypeOf<TestSubject<T1>>().toEqualTypeOf<[T1]>()
          expectTypeOf<TestSubject<T2>>().toEqualTypeOf<[T2]>()
        })
      })
    })

    describe('T extends object', () => {
      type T = 'data.vehicle' & { id: string }

      it('should equal string[]', () => {
        expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<string[]>()
        expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<string[]>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<string[]>()
      })

      describe('S extends undefined', () => {
        it('should equal [T]', () => {
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
        })
      })
    })

    describe('intrinsics', () => {
      describe('Capitalize<string> extends T', () => {
        type T = Capitalize<string>

        it('should equal string[]', () => {
          expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<string[]>()
          expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<string[]>()
          expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<string[]>()
        })

        describe('S extends undefined', () => {
          it('should equal [T]', () => {
            expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
          })
        })
      })

      describe('Lowercase<string> extends T', () => {
        type T = Lowercase<string>

        it('should equal T[]', () => {
          expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<T[]>()
          expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<T[]>()
          expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<T[]>()
        })

        describe('S extends undefined', () => {
          it('should equal [T]', () => {
            expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
          })
        })
      })

      describe('Uncapitalize<string> extends T', () => {
        type T = Uncapitalize<string>

        it('should equal string[]', () => {
          expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<string[]>()
          expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<string[]>()
          expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<string[]>()
        })

        describe('S extends undefined', () => {
          it('should equal [T]', () => {
            expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
          })
        })
      })

      describe('Uppercase<string> extends T', () => {
        type T = Uppercase<string>

        it('should equal T[]', () => {
          expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<T[]>()
          expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<T[]>()
          expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<T[]>()
        })

        describe('S extends undefined', () => {
          it('should equal [T]', () => {
            expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
          })
        })
      })
    })

    describe('string extends T', () => {
      type T = string

      it('should equal string[]', () => {
        expectTypeOf<TestSubject<T, Dot>>().toEqualTypeOf<string[]>()
        expectTypeOf<TestSubject<T, RegExp>>().toEqualTypeOf<string[]>()
        expectTypeOf<TestSubject<T, string>>().toEqualTypeOf<string[]>()
      })

      describe('S extends undefined', () => {
        it('should equal [T]', () => {
          expectTypeOf<TestSubject<T>>().toEqualTypeOf<[T]>()
        })
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Lowercase<string> | 'a.b.c' | 'abc'
      type S = Optional<Dot | EmptyString>

      // Expect
      expectTypeOf<TestSubject<T, S>>().toEqualTypeOf<
        | Lowercase<string>[]
        | ['a.b.c']
        | ['a', 'b', 'c']
        | ['a', Dot, 'b', Dot, 'c']
        | ['abc']
      >()
    })
  })
})
