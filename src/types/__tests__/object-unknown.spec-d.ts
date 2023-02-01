/**
 * @file Type Tests - ObjectUnknown
 * @module tutils/types/tests/unit-d/ObjectUnknown
 */

import type IndexSignature from '../index-signature'
import type TestSubject from '../object-unknown'

describe('unit-d:types/ObjectUnknown', () => {
  it('should have keys of type IndexSignature', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<IndexSignature>()
  })

  it('should have properties of type unknown', () => {
    expectTypeOf<TestSubject[IndexSignature]>().toBeUnknown()
  })
})
