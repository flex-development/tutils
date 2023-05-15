/**
 * @file Type Tests - Digit
 * @module tutils/types/tests/unit-d/Digit
 */

import type TestSubject from '../digit'

describe('unit-d:types/Digit', () => {
  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().not.toBeNever()
  })

  it('should extract 1', () => {
    expectTypeOf<TestSubject>().extract<1>().not.toBeNever()
  })

  it('should extract 2', () => {
    expectTypeOf<TestSubject>().extract<2>().not.toBeNever()
  })

  it('should extract 3', () => {
    expectTypeOf<TestSubject>().extract<3>().not.toBeNever()
  })

  it('should extract 4', () => {
    expectTypeOf<TestSubject>().extract<4>().not.toBeNever()
  })

  it('should extract 5', () => {
    expectTypeOf<TestSubject>().extract<5>().not.toBeNever()
  })

  it('should extract 6', () => {
    expectTypeOf<TestSubject>().extract<6>().not.toBeNever()
  })

  it('should extract 7', () => {
    expectTypeOf<TestSubject>().extract<7>().not.toBeNever()
  })

  it('should extract 8', () => {
    expectTypeOf<TestSubject>().extract<8>().not.toBeNever()
  })

  it('should extract 9', () => {
    expectTypeOf<TestSubject>().extract<9>().not.toBeNever()
  })
})
