/**
 * @file Unit Tests - isRegExp
 * @module tutils/utils/tests/unit/isRegExp
 */

import INTEGER from '#fixtures/integer'
import testSubject from '../is-reg-exp'

describe('unit:utils/isRegExp', () => {
  it('should return false if value is not RegExp instance', () => {
    expect(testSubject('ab+c')).to.be.false
  })

  it('should return true if value is RegExp instance', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [/.+\n*$/],
      [new RegExp('^' + INTEGER.toString())]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
