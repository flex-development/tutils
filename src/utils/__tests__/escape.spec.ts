/**
 * @file Unit Tests - escape
 * @module tutils/utils/tests/unit/escape
 */

import testSubject from '../escape'

describe('unit:utils/escape', () => {
  it('should return string with special HTML characters escaped', () => {
    expect(testSubject('&"\'<>')).to.equal('&amp;&quot;&#39;&lt;&gt;')
  })
})
