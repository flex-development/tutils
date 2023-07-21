/**
 * @file Unit Tests - unescape
 * @module tutils/utils/tests/unit/unescape
 */

import testSubject from '../unescape'

describe('unit:utils/unescape', () => {
  it('should return string with HTML entities unescaped', () => {
    expect(testSubject('&amp;&quot;&#39;&lt;&gt;')).to.equal('&"\'<>')
  })
})
