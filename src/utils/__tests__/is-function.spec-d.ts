/**
 * @file Type Tests - isFunction
 * @module tutils/utils/tests/unit-d/isFunction
 */

import type { Fn } from '#src/types'
import type testSubject from '../is-function'

describe('unit-d:utils/isFunction', () => {
  it('should guard Fn', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Fn>()
  })
})
