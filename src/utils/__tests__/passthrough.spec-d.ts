/**
 * @file Type Tests - passthrough
 * @module tutils/utils/tests/unit-d/passthrough
 */

import type testSubject from '../passthrough'

describe('unit-d:utils/passthrough', () => {
  type T = number

  it('should be callable with [T]', () => {
    expectTypeOf<typeof testSubject<T>>().parameters.toEqualTypeOf<[T]>()
  })

  it('should return T', () => {
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
