/**
 * @file Type Tests - Subtract
 * @module tutils/types/tests/unit-d/Subtract
 */

import type TestSubject from '../subtract'

describe('unit-d:types/Subtract', () => {
  it('should equal difference between M and S', () => {
    expectTypeOf<TestSubject<3, 3>>().toEqualTypeOf<0>()
    expectTypeOf<TestSubject<100, 97>>().toEqualTypeOf<3>()
  })
})
