/**
 * @file Type Tests - ObjectPlain
 * @module tutils/types/tests/unit-d/ObjectPlain
 */

import type Class from '../class'
import type Fn from '../fn'
import type TestSubject from '../object-plain'
import type Primitive from '../primitive'

describe('unit-d:types/ObjectPlain', () => {
  it('should match [[x: string]: unknown]', () => {
    expectTypeOf<TestSubject[string]>().toBeUnknown()
  })

  it('should match [[x: symbol]: unknown]', () => {
    expectTypeOf<TestSubject[symbol]>().toBeUnknown()
  })

  it('should match pojos', () => {
    expectTypeOf({ 5: null }).toMatchTypeOf<TestSubject>()
    expectTypeOf({ email: faker.internet.email() }).toMatchTypeOf<TestSubject>()
  })

  it('should not match arrays', () => {
    expectTypeOf<string[]>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match class objects', () => {
    expectTypeOf<Class<any>>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match class instance objects', () => {
    expectTypeOf(new Date()).not.toMatchTypeOf<TestSubject>()
    expectTypeOf(new Map()).not.toMatchTypeOf<TestSubject>()
    expectTypeOf(new Set()).not.toMatchTypeOf<TestSubject>()
  })

  it('should not match functions', () => {
    expectTypeOf<Fn>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match primitives', () => {
    expectTypeOf<Primitive>().not.toMatchTypeOf<TestSubject>()
  })
})
