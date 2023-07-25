/**
 * @file Type Tests - IsLiteral
 * @module tutils/types/tests/unit-d/IsLiteral
 */

import type Booleanish from '../booleanish'
import type TestSubject from '../is-literal'
import type Objectify from '../objectify'
import type Primitive from '../primitive'

describe('unit-d:types/IsLiteral', () => {
  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is unknown', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  describe('P extends bigint', () => {
    type P = bigint

    it('should equal false if T does not extend literal bigint', () => {
      expectTypeOf<TestSubject<Objectify<0n>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<1n>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<bigint>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<bigint>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<bigint>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<bigint, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends literal bigint', () => {
      expectTypeOf<TestSubject<0n>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<1n, P>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends boolean', () => {
    type P = boolean

    it('should equal false if T does not extend literal boolean', () => {
      expectTypeOf<TestSubject<Objectify<boolean>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<boolean>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<false>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<true>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<boolean>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<boolean, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends literal boolean', () => {
      expectTypeOf<TestSubject<false>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<false, P>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<true>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<true, P>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends null', () => {
    type P = null

    it('should equal false if T does not extend null', () => {
      expectTypeOf<TestSubject<undefined, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends null', () => {
      expectTypeOf<TestSubject<P>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<P, P>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends number', () => {
    type P = number

    it('should equal false if T does not extend literal number', () => {
      expectTypeOf<TestSubject<Objectify<0>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<1>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<number>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<number>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<number>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<number, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends literal number', () => {
      expectTypeOf<TestSubject<0>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<1, P>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends string', () => {
    type P = string

    it('should equal false if T does not extend literal string', () => {
      expectTypeOf<TestSubject<Objectify<'a'>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<'x'>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<string>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<string>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<string>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<string, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends literal string', () => {
      expectTypeOf<TestSubject<'a'>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<'x', P>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends symbol', () => {
    type P = symbol

    it('should equal false given any T', () => {
      expectTypeOf<TestSubject<Objectify<symbol>>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<Objectify<symbol>, P>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<false>()
      expectTypeOf<TestSubject<symbol, P>>().toEqualTypeOf<false>()
    })
  })

  describe('P extends undefined', () => {
    type P = undefined

    it('should equal false if T does not extend undefined', () => {
      expectTypeOf<TestSubject<null, P>>().toEqualTypeOf<false>()
    })

    it('should equal true if T extends undefined', () => {
      expectTypeOf<TestSubject<P>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<P, P>>().toEqualTypeOf<true>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Booleanish>>().toEqualTypeOf<boolean>()
      expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<boolean>()
    })
  })
})
