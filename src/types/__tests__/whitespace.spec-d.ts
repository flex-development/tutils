/**
 * @file Type Tests - Whitespace
 * @module tutils/types/tests/unit-d/Whitespace
 */

import type TestSubject from '../whitespace'

describe('unit-d:types/Whitespace', () => {
  it('should extract "\u{9}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{9}'>().not.toBeNever()
  })

  it('should extract "\u{20}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{20}'>().not.toBeNever()
  })

  it('should extract "\u{85}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{85}'>().not.toBeNever()
  })

  it('should extract "\u{200A}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{200A}'>().not.toBeNever()
  })

  it('should extract "\u{202F}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{202F}'>().not.toBeNever()
  })

  it('should extract "\u{205F}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{205F}'>().not.toBeNever()
  })

  it('should extract "\u{1680}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{1680}'>().not.toBeNever()
  })

  it('should extract "\u{2000}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2000}'>().not.toBeNever()
  })

  it('should extract "\u{2001}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2001}'>().not.toBeNever()
  })

  it('should extract "\u{2002}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2002}'>().not.toBeNever()
  })

  it('should extract "\u{2003}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2003}'>().not.toBeNever()
  })

  it('should extract "\u{2004}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2004}'>().not.toBeNever()
  })

  it('should extract "\u{2005}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2005}'>().not.toBeNever()
  })

  it('should extract "\u{2006}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2006}'>().not.toBeNever()
  })

  it('should extract "\u{2007}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2007}'>().not.toBeNever()
  })

  it('should extract "\u{2008}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2008}'>().not.toBeNever()
  })

  it('should extract "\u{2009}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2009}'>().not.toBeNever()
  })

  it('should extract "\u{2028}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2028}'>().not.toBeNever()
  })

  it('should extract "\u{2029}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{2029}'>().not.toBeNever()
  })

  it('should extract "\u{3000}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{3000}'>().not.toBeNever()
  })

  it('should extract "\u{A}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{A}'>().not.toBeNever()
  })

  it('should extract "\u{A0}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{A0}'>().not.toBeNever()
  })

  it('should extract "\u{B}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{B}'>().not.toBeNever()
  })

  it('should extract "\u{C}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{C}'>().not.toBeNever()
  })

  it('should extract "\u{D}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{D}'>().not.toBeNever()
  })

  it('should extract "\u{FEFF}"', () => {
    expectTypeOf<TestSubject>().extract<'\u{FEFF}'>().not.toBeNever()
  })
})
