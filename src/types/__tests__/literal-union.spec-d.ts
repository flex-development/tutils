/**
 * @file Type Tests - LiteralUnion
 * @module tutils/types/tests/unit-d/LiteralUnion
 */

import type TestSubject from '../literal-union'

describe('unit-d:types/LiteralUnion', () => {
  type L = 'node' | 'npm' | 'yarn'
  type P = string

  it('should extract L', () => {
    expectTypeOf<TestSubject<L, P>>().extract<L>().not.toBeNever()
  })

  it('should extract P & Record<never, never>', () => {
    expectTypeOf<TestSubject<L, P>>()
      .extract<P & Record<never, never>>()
      .not.toBeNever()
  })
})
