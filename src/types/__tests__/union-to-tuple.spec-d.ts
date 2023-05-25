/**
 * @file Type Tests - UnionToTuple
 * @module tutils/types/tests/unit-d/UnionToTuple
 */

import type TestSubject from '../union-to-tuple'

describe('unit-d:types/UnionToTuple', () => {
  it('should convert U to tuple', () => {
    expectTypeOf<TestSubject<0 | 1 | 2>>().toEqualTypeOf<[0, 1, 2]>()
  })
})
