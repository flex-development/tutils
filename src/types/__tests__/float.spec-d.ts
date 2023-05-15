/**
 * @file Type Tests - Float
 * @module tutils/types/tests/unit-d/Float
 */

import type TestSubject from '../float'
import type { tag } from '../opaque'

describe('unit-d:types/Float', () => {
  it('should extend number', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<number>()
  })

  it('should match [readonly [tag]: "float"]', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<{ readonly [tag]: 'float' }>()
  })
})
