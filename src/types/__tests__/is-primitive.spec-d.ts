/**
 * @file Type Tests - IsPrimitive
 * @module tutils/types/tests/unit-d/IsPrimitive
 */

import type TestSubject from '../is-primitive'
import type Primitive from '../primitive'

describe('unit-d:types/IsPrimitive', () => {
  it('should equal false if T does not extend Primitive', () => {
    expectTypeOf<TestSubject<Date>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends Primitive', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<true>()
  })
})
