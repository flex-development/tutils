/**
 * @file Type Tests - SortOrder
 * @module tutils/enums/tests/unit-d/SortOrder
 */

import type TestSubject from '../sort-order'

describe('unit-d:enums/SortOrder', () => {
  it('should match [ASCENDING = 1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ASCENDING')
      .toEqualTypeOf<1>()
  })

  it('should match [DESCENDING = 1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DESCENDING')
      .toEqualTypeOf<-1>()
  })
})
