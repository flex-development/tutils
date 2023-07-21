/**
 * @file Unit Tests - regexp
 * @module tutils/utils/tests/unit/regexp
 */

import testSubject from '../regexp'

describe('unit:utils/regexp', () => {
  it('should return pattern with special regex characters escaped', () => {
    // Arrange
    const pattern: string = '\\ ^ $ * + ? . ( ) | { } [ ] -'
    const expected: string =
      '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\] \\x2d'

    // Act + Expect
    expect(testSubject(pattern)).to.equal(expected)
  })
})
