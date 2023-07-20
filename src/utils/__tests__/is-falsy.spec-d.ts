/**
 * @file Type Tests - isFalsy
 * @module tutils/utils/tests/unit-d/isFalsy
 */

import type { Falsy } from '#src/types'
import type testSubject from '../is-falsy'

describe('unit-d:utils/isFalsy', () => {
  it('should guard Falsy', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Falsy>()
  })
})
