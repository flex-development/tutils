/**
 * @file Type Tests - Numeric
 * @module tutils/types/tests/unit-d/Numeric
 */

import type TestSubject from '../numeric'

describe('unit-d:types/Numeric', () => {
  it('should equal `${number}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`${number}`>()
  })

  it('should match positive numeric', () => {
    expectTypeOf<'13'>().toMatchTypeOf<TestSubject>()
  })

  it('should match negative numeric', () => {
    expectTypeOf<'-13'>().toMatchTypeOf<TestSubject>()
  })
})
