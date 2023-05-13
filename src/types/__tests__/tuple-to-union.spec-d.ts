/**
 * @file Type Tests - TupleToUnion
 * @module tutils/types/tests/unit-d/TupleToUnion
 */

import type TestSubject from '../tuple-to-union'

describe('unit-d:types/TupleToUnion', () => {
  it('should equal tuple elements union if T is a tuple', () => {
    expectTypeOf<TestSubject<[0, 1, 2]>>().toEqualTypeOf<0 | 1 | 2>()
  })

  it('should equal never if T is not a tuple', () => {
    expectTypeOf<TestSubject<number>>().toBeNever()
  })
})
