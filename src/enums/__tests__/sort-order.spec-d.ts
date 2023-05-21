/**
 * @file Type Tests - SortOrder
 * @module tutils/enums/tests/unit-d/SortOrder
 */

import type TestSubject from '../sort-order'

describe('unit-d:enums/SortOrder', () => {
  it('should match [ASC = 1]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('ASC').toEqualTypeOf<1>()
  })

  it('should match [DESC = 1]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DESC')
      .toEqualTypeOf<-1>()
  })
})
