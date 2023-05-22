/**
 * @file Type Tests - EmptyObject
 * @module tutils/types/tests/unit-d/EmptyObject
 */

import type TestSubject from '../empty-object'
import type IndexSignature from '../index-signature'

describe('unit-d:types/EmptyObject', () => {
  it('should have keys of type IndexSignature', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<IndexSignature>()
  })

  it('should have properties of type never', () => {
    expectTypeOf<TestSubject[IndexSignature]>().toBeNever()
  })
})
