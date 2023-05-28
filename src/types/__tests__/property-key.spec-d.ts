/**
 * @file Type Tests - PropertyKey
 * @module tutils/types/tests/unit-d/PropertyKey
 */

import type NumberString from '../number-string'
import type TestSubject from '../property-key'

describe('unit-d:types/PropertyKey', () => {
  it('should extract NumberString', () => {
    expectTypeOf<TestSubject>()
      .extract<NumberString>()
      .toEqualTypeOf<NumberString>()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().toBeSymbol()
  })
})
