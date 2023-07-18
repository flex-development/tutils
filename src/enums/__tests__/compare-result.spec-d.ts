/**
 * @file Type Tests - CompareResult
 * @module tutils/enums/tests/unit-d/CompareResult
 */

import type TestSubject from '../compare-result'

describe('unit-d:enums/CompareResult', () => {
  it('should match [EQUAL = 0]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EQUAL')
      .toEqualTypeOf<0>()
  })

  it('should match [GREATER_THAN = 1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GREATER_THAN')
      .toEqualTypeOf<1>()
  })

  it('should match [LESS_THAN = -1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LESS_THAN')
      .toEqualTypeOf<-1>()
  })
})
