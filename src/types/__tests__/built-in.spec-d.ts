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
    expectTypeOf<TestSubject>()
      .extract<AggregateError>()
      .toEqualTypeOf<AggregateError>()
  })

  it('should extract Array<any>', () => {
    expectTypeOf<TestSubject>().extract<any[]>().toEqualTypeOf<any[]>()
  })

  it('should extract ArrayBuffer', () => {
    expectTypeOf<TestSubject>()
      .extract<ArrayBuffer>()
      .toMatchTypeOf<ArrayBuffer>()
  })

  it('should extract AsyncGenerator', () => {
    expectTypeOf<TestSubject>()
      .extract<AsyncGenerator>()
      .toEqualTypeOf<AsyncGenerator>()
  })

  it('should extract AsyncGeneratorFunction', () => {
    expectTypeOf<TestSubject>()
      .extract<AsyncGeneratorFunction>()
      .toEqualTypeOf<AsyncGeneratorFunction>()
  })

  it('should extract AsyncIterator<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<AsyncIterator<any>>()
      .toMatchTypeOf<AsyncIterator<any>>()
  })

  it('should extract Atomics', () => {
    expectTypeOf<TestSubject>().extract<Atomics>().toEqualTypeOf<Atomics>()
  })

  it('should extract DataView', () => {
    expectTypeOf<TestSubject>().extract<DataView>().toEqualTypeOf<DataView>()
  })

  it('should extract Date', () => {
    expectTypeOf<TestSubject>().extract<Date>().toEqualTypeOf<Date>()
  })

  it('should extract Error', () => {
    expectTypeOf<TestSubject>().extract<Error>().toMatchTypeOf<Error>()
  })

  it('should extract EvalError', () => {
    expectTypeOf<TestSubject>().extract<EvalError>().toMatchTypeOf<EvalError>()
  })

  it('should extract FinalizationRegistry<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<FinalizationRegistry<any>>()
      .toEqualTypeOf<FinalizationRegistry<any>>()
  })

  it('should extract Fn', () => {
    expectTypeOf<TestSubject>().extract<Fn>().toMatchTypeOf<Fn>()
  })

  it('should extract Generator', () => {
    expectTypeOf<TestSubject>().extract<Generator>().toEqualTypeOf<Generator>()
  })

  it('should extract GeneratorFunction', () => {
    expectTypeOf<TestSubject>()
      .extract<GeneratorFunction>()
      .toEqualTypeOf<GeneratorFunction>()
  })

  it('should extract Intl.Collator', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.Collator>()
      .toEqualTypeOf<Intl.Collator>()
  })

  it('should extract Intl.DateTimeFormat', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.DateTimeFormat>()
      .toEqualTypeOf<Intl.DateTimeFormat>()
  })

  it('should extract Intl.DisplayNames', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.DisplayNames>()
      .toEqualTypeOf<Intl.DisplayNames>()
  })

  it('should extract Intl.ListFormat', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.ListFormat>()
      .toEqualTypeOf<Intl.ListFormat>()
  })

  it('should extract Intl.Locale', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.Locale>()
      .toEqualTypeOf<Intl.Locale>()
  })

  it('should extract Intl.NumberFormat', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.NumberFormat>()
      .toEqualTypeOf<Intl.NumberFormat>()
  })

  it('should extract Intl.PluralRules', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.PluralRules>()
      .toEqualTypeOf<Intl.PluralRules>()
  })

  it('should extract Intl.RelativeTimeFormat', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.RelativeTimeFormat>()
      .toEqualTypeOf<Intl.RelativeTimeFormat>()
  })

  it('should extract Intl.Segmenter', () => {
    expectTypeOf<TestSubject>()
      .extract<Intl.Segmenter>()
      .toEqualTypeOf<Intl.Segmenter>()
  })

  it('should extract Iterator<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<Iterator<any>>()
      .toMatchTypeOf<Iterator<any>>()
  })

  it('should extract JSON', () => {
    expectTypeOf<TestSubject>().extract<JSON>().toEqualTypeOf<JSON>()
  })

  it('should extract Map<any, any>', () => {
    expectTypeOf<TestSubject>()
      .extract<Map<any, any>>()
      .toEqualTypeOf<Map<any, any>>()
  })

  it('should extract Math', () => {
    expectTypeOf<TestSubject>().extract<Math>().toEqualTypeOf<Math>()
  })

  it('should extract Primitive', () => {
    expectTypeOf<TestSubject>().extract<Primitive>().toEqualTypeOf<Primitive>()
  })

  it('should extract Promise<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<Promise<any>>()
      .toEqualTypeOf<Promise<any>>()
  })

  it('should extract RangeError', () => {
    expectTypeOf<TestSubject>()
      .extract<RangeError>()
      .toMatchTypeOf<RangeError>()
  })

  it('should extract ReferenceError', () => {
    expectTypeOf<TestSubject>()
      .extract<ReferenceError>()
      .toMatchTypeOf<ReferenceError>()
  })

  it('should extract RegExp', () => {
    expectTypeOf<TestSubject>().extract<RegExp>().toEqualTypeOf<RegExp>()
  })

  it('should extract Set<any>', () => {
    expectTypeOf<TestSubject>().extract<Set<any>>().toEqualTypeOf<Set<any>>()
  })

  it('should extract SharedArrayBuffer', () => {
    expectTypeOf<TestSubject>()
      .extract<SharedArrayBuffer>()
      .toEqualTypeOf<SharedArrayBuffer>()
  })

  it('should extract SyntaxError', () => {
    expectTypeOf<TestSubject>()
      .extract<SyntaxError>()
      .toMatchTypeOf<SyntaxError>()
  })

  it('should extract TypedArray', () => {
    expectTypeOf<TestSubject>()
      .extract<TypedArray>()
      .toEqualTypeOf<TypedArray>()
  })

  it('should extract TypeError', () => {
    expectTypeOf<TestSubject>().extract<TypeError>().toMatchTypeOf<TypeError>()
  })

  it('should extract URIError', () => {
    expectTypeOf<TestSubject>().extract<URIError>().toMatchTypeOf<URIError>()
  })

  it('should extract WeakMap<any, any>', () => {
    expectTypeOf<TestSubject>()
      .extract<WeakMap<any, any>>()
      .toMatchTypeOf<WeakMap<any, any>>()
  })

  it('should extract WeakRef<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<WeakRef<any>>()
      .toEqualTypeOf<WeakRef<any>>()
  })

  it('should extract WeakSet<any>', () => {
    expectTypeOf<TestSubject>()
      .extract<WeakSet<any>>()
      .toMatchTypeOf<WeakSet<any>>()
  })

  it('should extract typeof Intl', () => {
    expectTypeOf<TestSubject>()
      .extract<typeof Intl>()
      .toEqualTypeOf<typeof Intl>()
  })

  it('should extract typeof Proxy', () => {
    expectTypeOf<TestSubject>()
      .extract<typeof Proxy>()
      .toEqualTypeOf<typeof Proxy>()
  })

  it('should extract typeof Reflect', () => {
    expectTypeOf<TestSubject>()
      .extract<typeof Reflect>()
      .toEqualTypeOf<typeof Reflect>()
  })
})
