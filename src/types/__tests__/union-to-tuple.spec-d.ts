/**
 * @file Type Tests - UnionToTuple
 * @module tutils/types/tests/unit-d/UnionToTuple
 */

import type TestSubject from '../union-to-tuple'

describe('unit-d:types/UnionToTuple', () => {
  it('should convert U to tuple', () => {
    expectTypeOf<TestSubject<'x'>>().toEqualTypeOf<['x']>()
  })
})
