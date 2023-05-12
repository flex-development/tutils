/**
 * @file Type Tests - isNumber
 * @module tutils/utils/tests/unit-d/isNumber
 */

import type testSubject from '../is-number'

describe('unit-d:utils/isNumber', () => {
  it('should guard number', () => {
    expectTypeOf<typeof testSubject>().guards.toBeNumber()
  })
})
