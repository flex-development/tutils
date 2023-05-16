/**
 * @file Type Tests - isRegExp
 * @module tutils/utils/tests/unit-d/isRegExp
 */

import type testSubject from '../is-reg-exp'

describe('unit-d:utils/isRegExp', () => {
  it('should guard RegExp', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<RegExp>()
  })
})
