/**
 * @file Type Tests - ObjectAny
 * @module tutils/types/tests/unit-d/ObjectAny
 */

import type Class from '../class'
import type AbstractClass from '../class-abstract'
import type Fn from '../fn'
import type TestSubject from '../object-any'
import type ObjectPlain from '../object-plain'
import type Primitive from '../primitive'

describe('unit-d:types/ObjectAny', () => {
  it('should extract AbstractClass<any>', () => {
    expectTypeOf<TestSubject>().extract<AbstractClass<any>>().not.toBeNever()
  })

  it('should extract Class<any>', () => {
    expectTypeOf<TestSubject>().extract<Class<any>>().not.toBeNever()
  })

  it('should match class instance objects', () => {
    expectTypeOf(new Date()).toMatchTypeOf<TestSubject>()
    expectTypeOf(new Map()).toMatchTypeOf<TestSubject>()
    expectTypeOf(new Set()).toMatchTypeOf<TestSubject>()
  })

  it('should match pojos', () => {
    expectTypeOf<ObjectPlain>().toMatchTypeOf<TestSubject>()
  })

  it('should not match arrays', () => {
    expectTypeOf<unknown[]>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match functions', () => {
    expectTypeOf<Fn>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match primitives', () => {
    expectTypeOf<Primitive>().not.toMatchTypeOf<TestSubject>()
  })
})
