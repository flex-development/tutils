/**
 * @file Type Tests - TupleLength
 * @module tutils/types/tests/unit-d/TupleLength
 */

import type Author from '#fixtures/author.interface'
import type EmptyArray from '../empty-array'
import type TestSubject from '../tuple-length'

describe('unit-d:types/TupleLength', () => {
  it('should equal T["length"] if T is a tuple', () => {
    expectTypeOf<TestSubject<EmptyArray>>().toEqualTypeOf<0>()
    expectTypeOf<TestSubject<[Author]>>().toEqualTypeOf<1>()
    expectTypeOf<TestSubject<[Author, Author]>>().toEqualTypeOf<2>()
  })

  it('should equal number if T is not a tuple', () => {
    expectTypeOf<TestSubject<Author[]>>().toBeNumber()
  })
})
