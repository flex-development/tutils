/**
 * @file Type Tests - ObjectPlain
 * @module tutils/types/tests/unit-d/ObjectPlain
 */

import type Class from '../class'
import type Fn from '../fn'
import type TestSubject from '../object-plain'
import type Primitive from '../primitive'

describe('unit-d:types/ObjectPlain', () => {
  class Person {}

  it('should match [[x: string]: Primitive | object]', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<Primitive | object>()
  })

  it('should match [[x: symbol]: Primitive | object]', () => {
    expectTypeOf<TestSubject[symbol]>().toEqualTypeOf<Primitive | object>()
  })

  it('should match pojos', () => {
    expectTypeOf({}).toMatchTypeOf<TestSubject>()
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
    expectTypeOf<typeof Date>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<typeof Person>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<typeof Map>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<typeof Set>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match functions', () => {
    expectTypeOf<Fn>().not.toMatchTypeOf<TestSubject>()
    expectTypeOf<Readonly<Fn>>().not.toMatchTypeOf<TestSubject>()
  })

  it('should not match primitives', () => {
    expectTypeOf<Primitive>().not.toMatchTypeOf<TestSubject>()
  })
})
