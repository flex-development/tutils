/**
 * @file Type Tests - isFunction
 * @module tutils/utils/tests/unit-d/isFunction
 */

import type { Fn } from '#src/types'
import type testSubject from '../is-function'

describe('unit-d:utils/isFunction', () => {
  it('should guard Fn<A, R>', () => {
    // Arrange
    type A = any[]
    type R = any

    // Expect
    expectTypeOf<typeof testSubject<A, R>>().guards.toEqualTypeOf<Fn>()
  })
})
