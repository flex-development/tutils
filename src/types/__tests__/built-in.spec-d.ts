/**
 * @file Type Tests - BuiltIn
 * @module tutils/types/tests/unit-d/BuiltIn
 */

import type TestSubject from '../built-in'
import type Fn from '../fn'
import type Primitive from '../primitive'
import type TypedArray from '../typed-array'

describe('unit-d:types/BuiltIn', () => {
  it('should extract AggregateError', () => {
    expectTypeOf<TestSubject>().extract<AggregateError>().not.toBeNever()
  })

  it('should extract ArrayBuffer', () => {
    expectTypeOf<TestSubject>().extract<ArrayBuffer>().not.toBeNever()
  })

  it('should extract AsyncGenerator', () => {
    expectTypeOf<TestSubject>().extract<AsyncGenerator>().not.toBeNever()
  })

  it('should extract AsyncGeneratorFunction', () => {
    expectTypeOf<TestSubject>()
      .extract<AsyncGeneratorFunction>()
      .not.toBeNever()
  })

  it('should extract AsyncIterator<any>', () => {
    expectTypeOf<TestSubject>().extract<AsyncIterator<any>>().not.toBeNever()
  })

  it('should extract Atomics', () => {
    expectTypeOf<TestSubject>().extract<Atomics>().not.toBeNever()
  })

  it('should extract DataView', () => {
    expectTypeOf<TestSubject>().extract<DataView>().not.toBeNever()
  })

  it('should extract Date', () => {
    expectTypeOf<TestSubject>().extract<Date>().not.toBeNever()
  })

  it('should extract Error', () => {
    expectTypeOf<TestSubject>().extract<Error>().not.toBeNever()
  })

  it('should extract EvalError', () => {
    expectTypeOf<TestSubject>().extract<EvalError>().not.toBeNever()
  })

  it('should extract FinalizationRegistry<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<FinalizationRegistry<any>>()
      .not.toBeNever()
  })

  it('should extract Fn', () => {
    expectTypeOf<TestSubject>().extract<Fn>().not.toBeNever()
  })

  it('should extract Function', () => {
    expectTypeOf<TestSubject>().extract<Function>().not.toBeNever()
  })

  it('should extract Generator', () => {
    expectTypeOf<TestSubject>().extract<Generator>().not.toBeNever()
  })

  it('should extract GeneratorFunction', () => {
    expectTypeOf<TestSubject>().extract<GeneratorFunction>().not.toBeNever()
  })

  it('should extract Intl.Collator', () => {
    expectTypeOf<TestSubject>().extract<Intl.Collator>().not.toBeNever()
  })

  it('should extract Intl.DateTimeFormat', () => {
    expectTypeOf<TestSubject>().extract<Intl.DateTimeFormat>().not.toBeNever()
  })

  it('should extract Intl.DisplayNames', () => {
    expectTypeOf<TestSubject>().extract<Intl.DisplayNames>().not.toBeNever()
  })

  it('should extract Intl.ListFormat', () => {
    expectTypeOf<TestSubject>().extract<Intl.ListFormat>().not.toBeNever()
  })

  it('should extract Intl.Locale', () => {
    expectTypeOf<TestSubject>().extract<Intl.Locale>().not.toBeNever()
  })

  it('should extract Intl.NumberFormat', () => {
    expectTypeOf<TestSubject>().extract<Intl.NumberFormat>().not.toBeNever()
  })

  it('should extract Intl.PluralRules', () => {
    expectTypeOf<TestSubject>().extract<Intl.PluralRules>().not.toBeNever()
  })

  it('should extract Intl.RelativeTimeFormat', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.RelativeTimeFormat>()
      .not.toBeNever()
  })

  it('should extract Intl.Segmenter', () => {
    expectTypeOf<TestSubject>().extract<Intl.Segmenter>().not.toBeNever()
  })

  it('should extract Iterator<any>', () => {
    expectTypeOf<TestSubject>().extract<Iterator<any>>().not.toBeNever()
  })

  it('should extract JSON', () => {
    expectTypeOf<TestSubject>().extract<JSON>().not.toBeNever()
  })

  it('should extract Map<any, any>', () => {
    expectTypeOf<TestSubject>().extract<Map<any, any>>().not.toBeNever()
  })

  it('should extract Math', () => {
    expectTypeOf<TestSubject>().extract<Math>().not.toBeNever()
  })

  it('should extract Primitive', () => {
    expectTypeOf<TestSubject>().extract<Primitive>().not.toBeNever()
  })

  it('should extract Promise<any>', () => {
    expectTypeOf<TestSubject>().extract<Promise<any>>().not.toBeNever()
  })

  it('should extract RangeError', () => {
    expectTypeOf<TestSubject>().extract<RangeError>().not.toBeNever()
  })

  it('should extract Readonly<Fn>', () => {
    expectTypeOf<TestSubject>().extract<Readonly<Fn>>().not.toBeNever()
  })

  it('should extract ReferenceError', () => {
    expectTypeOf<TestSubject>().extract<ReferenceError>().not.toBeNever()
  })

  it('should extract RegExp', () => {
    expectTypeOf<TestSubject>().extract<RegExp>().not.toBeNever()
  })

  it('should extract Set<any>', () => {
    expectTypeOf<TestSubject>().extract<Set<any>>().not.toBeNever()
  })

  it('should extract SharedArrayBuffer', () => {
    expectTypeOf<TestSubject>().extract<SharedArrayBuffer>().not.toBeNever()
  })

  it('should extract SyntaxError', () => {
    expectTypeOf<TestSubject>().extract<SyntaxError>().not.toBeNever()
  })

  it('should extract TypedArray', () => {
    expectTypeOf<TestSubject>().extract<TypedArray>().not.toBeNever()
  })

  it('should extract TypeError', () => {
    expectTypeOf<TestSubject>().extract<TypeError>().not.toBeNever()
  })

  it('should extract URIError', () => {
    expectTypeOf<TestSubject>().extract<URIError>().not.toBeNever()
  })

  it('should extract WeakMap<any, any>', () => {
    expectTypeOf<TestSubject>().extract<WeakMap<any, any>>().not.toBeNever()
  })

  it('should extract WeakRef<any>', () => {
    expectTypeOf<TestSubject>().extract<WeakRef<any>>().not.toBeNever()
  })

  it('should extract WeakSet<any>', () => {
    expectTypeOf<TestSubject>().extract<WeakSet<any>>().not.toBeNever()
  })

  it('should extract any[]', () => {
    expectTypeOf<TestSubject>().extract<any[]>().not.toBeNever()
  })

  it('should extract readonly any[]', () => {
    expectTypeOf<TestSubject>().extract<readonly any[]>().not.toBeNever()
  })

  it('should extract typeof Intl', () => {
    expectTypeOf<TestSubject>().extract<typeof Intl>().not.toBeNever()
  })

  it('should extract typeof Proxy', () => {
    expectTypeOf<TestSubject>().extract<typeof Proxy>().not.toBeNever()
  })

  it('should extract typeof Reflect', () => {
    expectTypeOf<TestSubject>().extract<typeof Reflect>().not.toBeNever()
  })
})
