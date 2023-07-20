/**
 * @file Type Tests - isWeakSet
 * @module tutils/utils/tests/unit-d/isWeakSet
 */

import type testSubject from '../is-weak-set'

describe('unit-d:utils/isWeakSet', () => {
  it('should guard WeakSet<T>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<WeakSet<object>>()
  })
})
