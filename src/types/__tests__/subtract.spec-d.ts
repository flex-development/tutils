/**
 * @file Type Tests - Subtract
 * @module tutils/types/tests/unit-d/Subtract
 */

import type TestSubject from '../subtract'

describe('unit-d:types/Subtract', () => {
  it('should equal difference between M and S', () => {
    expectTypeOf<TestSubject<5, 2>>().toEqualTypeOf<3>()
    expectTypeOf<TestSubject<3, 3>>().toEqualTypeOf<0>()
  })
})
