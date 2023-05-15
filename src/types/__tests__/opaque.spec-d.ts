/**
 * @file Type Tests - Opaque
 * @module tutils/types/tests/unit-d/Opaque
 */

import type TestSubject from '../opaque'
import type { tag } from '../opaque'

describe('unit-d:types/Opaque', () => {
  type B = number
  type T = 'account-number'

  it('should extend B', () => {
    expectTypeOf<TestSubject<B, T>>().toMatchTypeOf<B>()
  })

  it('should match [readonly [tag]: T]', () => {
    expectTypeOf<TestSubject<B, T>>().toMatchTypeOf<{ readonly [tag]: T }>()
  })
})
