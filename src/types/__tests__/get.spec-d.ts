/**
 * @file Type Tests - Get
 * @module tutils/types/tests/unit-d/Get
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type TestSubject from '../get'
import type Primitive from '../primitive'

describe('unit-d:types/Get', () => {
  it('should equal never if T extends Exclude<Primitive, string>', () => {
    expectTypeOf<TestSubject<Exclude<Primitive, string>, 0>>().toBeNever()
  })

  it('should extract type of T[P]', () => {
    expectTypeOf<TestSubject<Book, 'isbn'>>().toBeNumber()
  })

  it('should extract type of T[P] if T is array', () => {
    expectTypeOf<TestSubject<Book, 'authors.0'>>().toEqualTypeOf<Author>()
  })

  it('should extract type of T[P] if T is tuple', () => {
    expectTypeOf<TestSubject<[Author, Author], '1'>>().toEqualTypeOf<Author>()
  })

  it('should extract type of T[P] with respect for dot notation', () => {
    expectTypeOf<TestSubject<Book, 'publisher.name'>>().toBeString()
  })
})
