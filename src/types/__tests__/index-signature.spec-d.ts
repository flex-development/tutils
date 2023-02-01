/**
 * @file Type Tests - IndexSignature
 * @module tutils/types/tests/unit-d/IndexSignature
 */

import type TestSubject from '../index-signature'

describe('unit-d:types/IndexSignature', () => {
  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().toBeNumber()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })

  it('should extract symbol', () => {
    expectTypeOf<TestSubject>().extract<symbol>().toBeSymbol()
  })
})
