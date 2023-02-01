/**
 * @file Type Tests - ObjectPlain
 * @module tutils/types/tests/unit-d/ObjectPlain
 */

import type IndexSignature from '../index-signature'
import type TestSubject from '../object-plain'

describe('unit-d:types/ObjectPlain', () => {
  it('should have keys of type IndexSignature', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<IndexSignature>()
  })

  it('should have properties of type any', () => {
    expectTypeOf<TestSubject[IndexSignature]>().toBeAny()
  })
})
