/**
 * @file Type Tests - isBoolean
 * @module tutils/utils/tests/unit-d/isBoolean
 */

import type testSubject from '../is-boolean'

describe('unit-d:utils/isBoolean', () => {
  it('should guard boolean', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<boolean>()
  })
})
