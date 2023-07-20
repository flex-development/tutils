/**
 * @file Type Tests - isPromise
 * @module tutils/utils/tests/unit-d/isPromise
 */

import type testSubject from '../is-promise'

describe('unit-d:utils/isPromise', () => {
  it('should guard Promise<T>', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Promise<unknown>>()
  })
})
