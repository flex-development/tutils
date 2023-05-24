/**
 * @file Type Tests - Path
 * @module tutils/types/tests/unit-d/Path
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type Publisher from '#fixtures/publisher.interface'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type Fn from '../fn'
import type Numeric from '../numeric'
import type TestSubject from '../path'
import type Timestamp from '../timestamp'

describe('unit-d:types/Path', () => {
  it('should equal never if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray>>().toBeNever()
  })

  it('should equal never if T extends EmptyObject', () => {
    expectTypeOf<TestSubject<EmptyObject>>().toBeNever()
  })

  it('should equal never if T extends EmptyString', () => {
    expectTypeOf<TestSubject<EmptyString>>().toBeNever()
  })

  it('should equal union if T extends ObjectAny', () => {
    // Arrange
    type T = Omit<Book, 'publisher'> & {
      authors: Author[]
      fn?: Fn & { id: number & { tag: 'book' } }
      publisher: Omit<Publisher, 'display_name'> & {
        display_name?: { value: string }
        fn?: Fn & { id: number & { tag: 'publisher' } }
      }
    }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<
      | 'authors'
      | 'fn.id.tag'
      | 'fn.id'
      | 'fn'
      | 'isbn'
      | 'publisher.display_name.value'
      | 'publisher.display_name'
      | 'publisher.email'
      | 'publisher.fn.id.tag'
      | 'publisher.fn.id'
      | 'publisher.fn'
      | 'publisher.name'
      | 'publisher'
      | 'readers'
      | 'title'
      | `authors.${number}.display_name`
      | `authors.${number}.email`
      | `authors.${number}.first_name`
      | `authors.${number}.last_name`
      | `authors.${number}`
    >()
  })

  it('should equal union if T extends Readonly<Fn>', () => {
    // Arrange
    type F1 = Fn
    type F2Obj = { '0': { '1': { '2': { '3': { '4': { '5': number } } } } } }
    type F2 = Readonly<F2Obj & Fn>
    type E1 = never
    type E2 = '0.1.2.3.4.5' | '0.1.2.3.4' | '0.1.2.3' | '0.1.2' | '0.1' | '0'

    // Expect
    expectTypeOf<TestSubject<F1>>().toEqualTypeOf<E1>()
    expectTypeOf<TestSubject<F2>>().toEqualTypeOf<E2>()
  })

  it('should equal union if T extends Readonly<Primitive>', () => {
    // Arrange
    type P1 = boolean
    type P2 = string & { tag: string }
    type P3 = Readonly<P2>
    type P4 = Timestamp<'unix'>

    // Expect
    expectTypeOf<TestSubject<P1>>().toBeNever()
    expectTypeOf<TestSubject<P2>>().toEqualTypeOf<'tag'>()
    expectTypeOf<TestSubject<P3>>().toEqualTypeOf<'tag'>()
    expectTypeOf<TestSubject<P4>>().toBeNever()
  })

  it('should equal union if T extends readonly unknown[]', () => {
    // Arrange
    type A1 = Author[] & { matcher: RegExp }
    type A2 = { matcher: RegExp } & [Author]
    type E1 = Numeric | 'matcher' | `${Numeric}.${keyof Author}`
    type E2 =
      | '0.display_name'
      | '0.email'
      | '0.first_name'
      | '0.last_name'
      | '0'
      | 'matcher'

    // Expect
    expectTypeOf<TestSubject<A1>>().toEqualTypeOf<E1>()
    expectTypeOf<TestSubject<A2>>().toEqualTypeOf<E2>()
  })
})
