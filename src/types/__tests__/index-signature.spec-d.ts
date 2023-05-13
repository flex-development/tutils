/**
 * @file Type Tests - IndexSignature
 * @module tutils/types/tests/unit-d/IndexSignature
 */

import type TestSubject from '../index-signature'
import type NumberString from '../number-string'

describe('unit-d:types/IndexSignature', () => {
  it('should extract NumberString', () => {
    expectTypeOf<TestSubject>()
      .extract<NumberString>()
      .toEqualTypeOf<NumberString>()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().toBeSymbol()
  })
})
