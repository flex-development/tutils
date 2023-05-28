/**
 * @file Type Tests - identity
 * @module tutils/utils/tests/unit-d/identity
 */

import type testSubject from '../identity'

describe('unit-d:utils/identity', () => {
  type T = number

  it('should be callable with [T]', () => {
    expectTypeOf<typeof testSubject<T>>().parameters.toEqualTypeOf<[T]>()
  })

  it('should return T', () => {
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
