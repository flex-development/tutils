/**
 * @file Type Tests - Booleanish
 * @module tutils/types/tests/unit-d/Booleanish
 */

import type TestSubject from '../booleanish'
import type Stringify from '../stringify'

describe('unit-d:types/Booleanish', () => {
  it('should extract Stringify<boolean>', () => {
    expectTypeOf<TestSubject>().extract<Stringify<boolean>>().not.toBeNever()
  })

  it('should extract "0"', () => {
    expectTypeOf<TestSubject>().extract<'0'>().not.toBeNever()
  })

  it('should extract "1"', () => {
    expectTypeOf<TestSubject>().extract<'1'>().not.toBeNever()
  })

  it('should extract "n"', () => {
    expectTypeOf<TestSubject>().extract<'n'>().not.toBeNever()
  })

  it('should extract "y"', () => {
    expectTypeOf<TestSubject>().extract<'y'>().not.toBeNever()
  })

  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().not.toBeNever()
  })

  it('should extract 1', () => {
    expectTypeOf<TestSubject>().extract<1>().not.toBeNever()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().not.toBeNever()
  })
})
