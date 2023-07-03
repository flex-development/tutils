/**
 * @file Type Tests - EmptyObject
 * @module tutils/types/tests/unit-d/EmptyObject
 */

import type TestSubject from '../empty-object'
import type { tag } from '../empty-object'

describe('unit-d:types/EmptyObject', () => {
  it('should match [[tag]?: never]', () => {
    expectTypeOf<TestSubject[typeof tag]>().toBeUndefined()
  })
})
