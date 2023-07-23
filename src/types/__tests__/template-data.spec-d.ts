/**
 * @file Type Tests - TemplateData
 * @module tutils/types/tests/unit-d/TemplateData
 */

import type Joinable from '../joinable'
import type TestSubject from '../template-data'

describe('unit-d:types/TemplateData', () => {
  it('should match [[x: number]: Joinable | TemplateData]', () => {
    expectTypeOf<TestSubject[number]>().toEqualTypeOf<Joinable | TestSubject>
  })

  it('should match [[x: string]: Joinable | TemplateData]', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<Joinable | TestSubject>
  })
})
