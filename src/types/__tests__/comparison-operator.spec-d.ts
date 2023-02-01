/**
 * @file Type Tests - ComparisonOperator
 * @module tutils/types/tests/unit-d/ComparisonOperator
 */

import type TestSubject from '../comparison-operator'

describe('unit-d:types/ComparisonOperator', () => {
  it('should extract "!="', () => {
    expectTypeOf<TestSubject>().extract<'!='>().toBeString()
  })

  it('should extract "<"', () => {
    expectTypeOf<TestSubject>().extract<'<'>().toBeString()
  })

  it('should extract "<="', () => {
    expectTypeOf<TestSubject>().extract<'<='>().toBeString()
  })

  it('should extract "="', () => {
    expectTypeOf<TestSubject>().extract<'='>().toBeString()
  })

  it('should extract ">"', () => {
    expectTypeOf<TestSubject>().extract<'>'>().toBeString()
  })

  it('should extract ">="', () => {
    expectTypeOf<TestSubject>().extract<'>='>().toBeString()
  })
})
