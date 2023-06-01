/**
 * @file Type Tests - IsLiteral
 * @module tutils/types/tests/unit-d/IsLiteral
 */

import type TestSubject from '../is-literal'

describe('unit-d:types/IsLiteral', () => {
  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  describe('P extends bigint', () => {
    type Literal = bigint

    it('should equal false if T is not a literal bigint', () => {
      expectTypeOf<TestSubject<Literal, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is a literal bigint', () => {
      expectTypeOf<TestSubject<0n, Literal>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends boolean', () => {
    type Literal = boolean

    it('should equal false if T is not a literal boolean', () => {
      expectTypeOf<TestSubject<Literal, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is a literal boolean', () => {
      expectTypeOf<TestSubject<false, Literal>>().toEqualTypeOf<true>()
      expectTypeOf<TestSubject<true, Literal>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends null', () => {
    type Literal = null

    it('should equal false if T is not null', () => {
      expectTypeOf<TestSubject<undefined, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is null', () => {
      expectTypeOf<TestSubject<null, Literal>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends number', () => {
    type Literal = number

    it('should equal false if T is not a literal number', () => {
      expectTypeOf<TestSubject<Literal, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is a literal number', () => {
      expectTypeOf<TestSubject<0, Literal>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends string', () => {
    type Literal = string

    it('should equal false if T is not a literal string', () => {
      expectTypeOf<TestSubject<Literal, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is a literal string', () => {
      expectTypeOf<TestSubject<'string', Literal>>().toEqualTypeOf<true>()
    })
  })

  describe('P extends symbol', () => {
    type Literal = symbol

    it('should equal false given any T', () => {
      expectTypeOf<TestSubject<Literal, Literal>>().toEqualTypeOf<false>()
    })
  })

  describe('P extends undefined', () => {
    type Literal = undefined

    it('should equal false if T is not undefined', () => {
      expectTypeOf<TestSubject<null, Literal>>().toEqualTypeOf<false>()
    })

    it('should equal true if T is undefined', () => {
      expectTypeOf<TestSubject<undefined, Literal>>().toEqualTypeOf<true>()
    })
  })
})
