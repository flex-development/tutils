/**
 * @file Type Tests - IsTuple
 * @module tutils/types/tests/unit-d/IsTuple
 */

import type TestSubject from '../is-tuple'

describe('unit-d:types/IsTuple', () => {
  it('should equal false if T is not a tuple', () => {
    expectTypeOf<TestSubject<string[]>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is a tuple', () => {
    expectTypeOf<TestSubject<['a', 'b']>>().toEqualTypeOf<true>()
  })
})
