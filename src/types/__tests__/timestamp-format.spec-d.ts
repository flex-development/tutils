/**
 * @file Type Tests - TimestampFormat
 * @module tutils/types/tests/unit-d/TimestampFormat
 */

import type TestSubject from '../timestamp-format'

describe('unit-d:types/TimestampFormat', () => {
  it('should extract "iso"', () => {
    expectTypeOf<TestSubject>().extract<'iso'>().not.toBeNever()
  })

  it('should extract "unix"', () => {
    expectTypeOf<TestSubject>().extract<'unix'>().not.toBeNever()
  })
})
