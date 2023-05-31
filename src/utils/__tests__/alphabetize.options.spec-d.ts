/**
 * @file Type Tests - AlphabetizeOptions
 * @module tutils/utils/tests/unit-d/AlphabetizeOptions
 */

import type { SortOrder } from '#src/enums'
import type { OneOrMany, Optional } from '#src/types'
import type TestSubject from '../alphabetize.options'

describe('unit-d:utils/AlphabetizeOptions', () => {
  it('should match Intl.CollatorOptions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Intl.CollatorOptions>()
  })

  it('should match [caseFirst?: Optional<"false" | "lower" | "upper">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('caseFirst')
      .toEqualTypeOf<Optional<'false' | 'lower' | 'upper'>>()
  })

  it('should match [ignorePunctuation?: Optional<boolean>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ignorePunctuation')
      .toEqualTypeOf<Optional<boolean>>()
  })

  it('should match [localeMatcher?: Optional<"best fit" | "lookup">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('localeMatcher')
      .toEqualTypeOf<Optional<'best fit' | 'lookup'>>()
  })

  it('should match [locales?: Optional<OneOrMany<string>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('locales')
      .toEqualTypeOf<Optional<OneOrMany<string>>>()
  })

  it('should match [numeric?: Optional<boolean>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('numeric')
      .toEqualTypeOf<Optional<boolean>>()
  })

  it('should match [order?: Optional<SortOrder>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('order')
      .toEqualTypeOf<Optional<SortOrder>>()
  })

  it('should match [sensitivity?: Optional<"accent" | "base" | "case" | "variant">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sensitivity')
      .toEqualTypeOf<Optional<'accent' | 'base' | 'case' | 'variant'>>()
  })
})
