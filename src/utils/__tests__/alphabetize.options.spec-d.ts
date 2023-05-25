/**
 * @file Type Tests - AlphabetizeOptions
 * @module tutils/utils/tests/unit-d/AlphabetizeOptions
 */

import type { SortOrder } from '#src/enums'
import type { OneOrMany } from '#src/types'
import type TestSubject from '../alphabetize.options'

describe('unit-d:utils/AlphabetizeOptions', () => {
  it('should match Intl.CollatorOptions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Intl.CollatorOptions>()
  })

  it('should match [caseFirst?: "false" | "lower" | "upper" | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('caseFirst')
      .toEqualTypeOf<'false' | 'lower' | 'upper' | undefined>()
  })

  it('should match [ignorePunctuation?: boolean | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ignorePunctuation')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [localeMatcher?: "best fit" | "lookup" | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('localeMatcher')
      .toEqualTypeOf<'best fit' | 'lookup' | undefined>()
  })

  it('should match [locales?: OneOrMany<string> | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('locales')
      .toEqualTypeOf<OneOrMany<string> | undefined>()
  })

  it('should match [numeric?: boolean | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('numeric')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [order?: SortOrder | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('order')
      .toEqualTypeOf<SortOrder | undefined>()
  })

  it('should match [sensitivity?: "accent" | "base" | "case" | "variant" | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sensitivity')
      .toEqualTypeOf<'accent' | 'base' | 'case' | 'variant' | undefined>()
  })
})
