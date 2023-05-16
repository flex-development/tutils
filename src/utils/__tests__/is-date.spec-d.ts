/**
 * @file Type Tests - isDate
 * @module tutils/utils/tests/unit-d/isDate
 */

import type testSubject from '../is-date'

describe('unit-d:utils/isDate', () => {
  it('should guard Date', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Date>()
  })
})
