/**
 * @file Type Tests - isFunction
 * @module tutils/guards/tests/unit-d/isFunction
 */

import type { Fn } from '#src/types'
import type testSubject from '../is-function'

describe('unit-d:guards/isFunction', () => {
  it('should guard Fn', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Fn>()
  })
})
