/**
 * @file Type Tests - Timestamp
 * @module tutils/types/tests/unit-d/Timestamp
 */

import type NumberString from '../number-string'
import type { tag } from '../opaque'
import type TestSubject from '../timestamp'
import type TimestampFormat from '../timestamp-format'
import type TimestampToken from '../timestamp-token'

describe('unit-d:types/Timestamp', () => {
  it('should equal F if F is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should extend NumberString if F is any', () => {
    expectTypeOf<TestSubject<any>>().toMatchTypeOf<NumberString>()
  })

  it('should match [readonly [tag]: TimestampToken]', () => {
    // Arrange
    type Expected = { readonly [tag]: TimestampToken }

    // Expect
    expectTypeOf<TestSubject<TimestampFormat>>().toMatchTypeOf<Expected>()
  })

  describe('F extends "iso"', () => {
    it('should extend string', () => {
      expectTypeOf<TestSubject<'iso'>>().toMatchTypeOf<string>()
    })
  })

  describe('F extends "unix"', () => {
    it('should extend number', () => {
      expectTypeOf<TestSubject<'unix'>>().toMatchTypeOf<number>()
    })
  })
})
