/**
 * @file Type Tests - EmptyArray
 * @module tutils/types/tests/unit-d/EmptyArray
 */

import type TestSubject from '../empty-array'

describe('unit-d:types/EmptyArray', () => {
  it('should extract Readonly<[]>', () => {
    expectTypeOf<TestSubject>().extract<Readonly<[]>>().not.toBeNever()
    expectTypeOf<Readonly<[]>>().toMatchTypeOf<TestSubject>()
  })

  it('should extract []', () => {
    expectTypeOf<TestSubject>().extract<[]>().not.toBeNever()
    expectTypeOf<[]>().toMatchTypeOf<TestSubject>()
  })
})
