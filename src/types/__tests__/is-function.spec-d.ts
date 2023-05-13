/**
 * @file Type Tests - IsFunction
 * @module tutils/types/tests/unit-d/IsFunction
 */

import type Fn from '../fn'
import type TestSubject from '../is-function'

describe('unit-d:types/IsFunction', () => {
  it('should equal false if T does not extend Fn', () => {
    expectTypeOf<TestSubject<Date>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends Fn', () => {
    expectTypeOf<TestSubject<Fn>>().toEqualTypeOf<true>()
  })
})
