/**
 * @file Type Tests - Timestamp
 * @module tutils/types/tests/unit-d/Timestamp
 */

import type { tag } from '../opaque'
import type TestSubject from '../timestamp'
import type TimestampFormat from '../timestamp-format'

describe('unit-d:types/Timestamp', () => {
  it('should extend number if Format extends "unix"', () => {
    expectTypeOf<TestSubject<'unix'>>().toMatchTypeOf<number>()
  })

  it('should extend string if Format extends "iso"', () => {
    expectTypeOf<TestSubject<'iso'>>().toMatchTypeOf<string>()
  })

  it('should match [readonly [tag]: "$timestamp"]', () => {
    expectTypeOf<TestSubject<TimestampFormat>>().toMatchTypeOf<{
      readonly [tag]: '$timestamp'
    }>()
  })
})
