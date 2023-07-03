/**
 * @file Type Tests - Booleanish
 * @module tutils/types/tests/unit-d/Booleanish
 */

import type TestSubject from '../booleanish'
import type Stringify from '../stringify'

describe('unit-d:types/Booleanish', () => {
  it('should extract Stringify<boolean>', () => {
    expectTypeOf<TestSubject>().extract<Stringify<boolean>>().toBeString()
  })

  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().toBeNumber()
  })

  it('should extract 1', () => {
    expectTypeOf<TestSubject>().extract<1>().toBeNumber()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().toBeBoolean()
  })
})
