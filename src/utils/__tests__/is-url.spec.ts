/**
 * @file Unit Tests - isURL
 * @module tutils/utils/tests/unit/isURL
 */

import * as mlly from '@flex-development/mlly'
import url from 'node:url'
import DOT from '../dot'
import testSubject from '../is-url'

describe('unit:utils/isURL', () => {
  it('should return false if value is not URL instance', () => {
    expect(testSubject(url.pathToFileURL(DOT).href)).to.be.false
  })

  it('should return true if value is URL instance', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [mlly.toURL('package.json')],
      [new URL(url.pathToFileURL('loader.mjs').href)]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
