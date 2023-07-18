/**
 * @file Type Tests - Fn
 * @module tutils/types/tests/unit-d/Fn
 */

import type TestSubject from '../fn'
import type ReadonlyKeys from '../keys-readonly'
import type Optional from '../optional'

describe('unit-d:types/Fn', () => {
  type A = [string, Optional<string> | RegExp, Optional<number>?]
  type R = string[]

  it('should be callable with A', () => {
    expectTypeOf<TestSubject<A, R>>().parameters.toEqualTypeOf<A>()
  })

  it('should return R', () => {
    expectTypeOf<TestSubject<A, R>>().returns.toEqualTypeOf<R>()
  })

  describe('properties', () => {
    it('should match [[Symbol.hasInstance](value: any): boolean]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<typeof Symbol.hasInstance>()
        .toEqualTypeOf<(value: any) => boolean>()
    })

    it('should match [apply(this: Function, self: any, args?: any[]): any]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'apply'>()
        .toEqualTypeOf<(this: Function, self: any, args?: any[]) => any>()
    })

    it('should match [arguments: any]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'arguments'>()
        .toEqualTypeOf<any>()
    })

    it('should match [bind(this: Function, self: any, ...args: any[]): any]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'bind'>()
        .toEqualTypeOf<(this: Function, self: any, ...args: any[]) => any>()
    })

    it('should match [call(this: Function, self: any, ...args: any[]): any]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'call'>()
        .toEqualTypeOf<(this: Function, self: any, ...args: any[]) => any>()
    })

    it('should match [caller: Function]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'caller'>()
        .toEqualTypeOf<Function>()
    })

    it('should match [readonly length: number]', () => {
      // Arrange
      type K = 'length'

      // Expect
      expectTypeOf<TestSubject>().toHaveProperty<K>().toEqualTypeOf<number>()
      expectTypeOf<K>().toMatchTypeOf<ReadonlyKeys<TestSubject>>()
    })

    it('should match [readonly name: string]', () => {
      // Arrange
      type K = 'name'

      // Expect
      expectTypeOf<TestSubject>().toHaveProperty<K>().toEqualTypeOf<string>()
      expectTypeOf<K>().toMatchTypeOf<ReadonlyKeys<TestSubject>>()
    })

    it('should match [prototype: any]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'prototype'>()
        .toEqualTypeOf<any>()
    })

    it('should match [toString(): string]', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty<'toString'>()
        .toEqualTypeOf<() => string>()
    })
  })
})
