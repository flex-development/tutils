/**
 * @file Type Tests - EmptyArray
 * @module tutils/types/tests/unit-d/EmptyArray
 */

import type TestSubject from '../empty-array'

describe('unit-d:types/EmptyArray', () => {
  it('should equal []', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<[]>()
  })
})
