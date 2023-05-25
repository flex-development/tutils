/**
 * @file Unit Tests - alphabetize
 * @module tutils/utils/tests/unit/alphabetize
 */

import { SortOrder } from '#src/enums'
import type { Fn } from '#src/types'
import testSubject from '../alphabetize'

describe('unit:utils/alphabetize', () => {
  type T = { letter: string }

  it('should return alphabetized copy of array', () => {
    // Arrange
    const array: T[] = [{ letter: 'c' }, { letter: 'b' }, { letter: 'a' }]
    const mapper: Fn<[T], string> = ({ letter }: T): string => letter

    // Act
    const result = testSubject(array, mapper)

    // Act + Expect
    expect(array).to.deep.equal(array).and.not.deep.equal(result)
    expect(result).to.deep.equal([
      { letter: 'a' },
      { letter: 'b' },
      { letter: 'c' }
    ])
  })

  it('should return alphabetized copy of array in descending order', () => {
    // Arrange
    const array: T[] = [{ letter: 'a' }, { letter: 'b' }, { letter: 'c' }]
    const mapper: Fn<[T], string> = ({ letter }: T): string => letter

    // Act
    const result = testSubject(array, mapper, { order: SortOrder.DESC })

    // Act + Expect
    expect(array).to.deep.equal(array).and.not.deep.equal(result)
    expect(result).to.deep.equal([
      { letter: 'c' },
      { letter: 'b' },
      { letter: 'a' }
    ])
  })
})
