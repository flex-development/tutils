/**
 * @file Type Tests - Numeric
 * @module tutils/types/tests/unit-d/Numeric
 */

import type TestSubject from '../numeric'
import type Stringify from '../stringify'

describe('unit-d:types/Numeric', () => {
  it('should equal Stringify<number>`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Stringify<number>>()
  })

  it('should match positive numeric', () => {
    expectTypeOf<'13'>().toMatchTypeOf<TestSubject>()
  })

  it('should match negative numeric', () => {
    expectTypeOf<'-13'>().toMatchTypeOf<TestSubject>()
  })
})
