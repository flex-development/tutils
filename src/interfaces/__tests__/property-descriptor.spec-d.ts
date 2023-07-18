/**
 * @file Type Tests - PropertyDescriptor
 * @module tutils/interfaces/tests/unit-d/PropertyDescriptor
 */

import type { EmptyArray, Fn, Optional } from '#src/types'
import type TestSubject from '../property-descriptor'

describe('unit-d:interfaces/PropertyDescriptor', () => {
  type T = number

  it('should match [configurable?: boolean]', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('configurable')
      .toEqualTypeOf<Optional<boolean>>()
  })

  it('should match [enumerable?: boolean]', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('enumerable')
      .toEqualTypeOf<Optional<boolean>>()
  })

  it('should match [get?(): T]', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('get')
      .toMatchTypeOf<Optional<Fn<EmptyArray, T>>>()
  })

  it('should match [set?(v: T): void]', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('set')
      .toMatchTypeOf<Optional<Fn<[T], void>>>()
  })

  it('should match [value?: T', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('value')
      .toEqualTypeOf<Optional<T>>()
  })

  it('should match [writable?: boolean]', () => {
    expectTypeOf<TestSubject<T>>()
      .toHaveProperty('writable')
      .toEqualTypeOf<Optional<boolean>>()
  })
})
