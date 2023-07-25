/**
 * @file Type Tests - Integer
 * @module tutils/types/tests/unit-d/Integer
 */

import type TestSubject from '../integer'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/Integer', () => {
  it('should extend number', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<number>()
  })

  it('should match [readonly [tag]: "integer"]', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<{
      readonly [opaque]: 'integer'
    }>()
  })
})
