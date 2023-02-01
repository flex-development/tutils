/**
 * @file Type Tests - TypedArray
 * @module tutils/types/tests/unit-d/TypedArray
 */

import type TestSubject from '../typed-array'

describe('unit-d:types/TypedArray', () => {
  it('should extract BigInt64Array', () => {
    expectTypeOf<TestSubject>().extract<BigInt64Array>().toBeObject()
  })

  it('should extract BigUint64Array', () => {
    expectTypeOf<TestSubject>().extract<BigUint64Array>().toBeObject()
  })

  it('should extract Float32Array', () => {
    expectTypeOf<TestSubject>().extract<Float32Array>().toBeObject()
  })

  it('should extract Float64Array', () => {
    expectTypeOf<TestSubject>().extract<Float64Array>().toBeObject()
  })

  it('should extract Int8Array', () => {
    expectTypeOf<TestSubject>().extract<Int8Array>().toBeObject()
  })

  it('should extract Int16Array', () => {
    expectTypeOf<TestSubject>().extract<Int16Array>().toBeObject()
  })

  it('should extract Int32Array', () => {
    expectTypeOf<TestSubject>().extract<Int32Array>().toBeObject()
  })

  it('should extract Uint8Array', () => {
    expectTypeOf<TestSubject>().extract<Uint8Array>().toBeObject()
  })

  it('should extract Uint8ClampedArray', () => {
    expectTypeOf<TestSubject>().extract<Uint8ClampedArray>().toBeObject()
  })

  it('should extract Uint16Array', () => {
    expectTypeOf<TestSubject>().extract<Uint16Array>().toBeObject()
  })

  it('should extract Uint32Array', () => {
    expectTypeOf<TestSubject>().extract<Uint32Array>().toBeObject()
  })
})
