/**
 * @file Type Definitions - Segment
 * @module tutils/types/Segment
 */

import type Dot from './dot'
import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type IfNever from './if-never'
import type Nilable from './nilable'
import type Split from './split'

/**
 * Construct a path segment array.
 *
 * @todo examples
 *
 * @template T - Path to segment
 */
type Segment<T extends Nilable<string>> = IfAny<
  T,
  string[],
  IfNever<T, EmptyArray, T extends EmptyString ? EmptyArray : Split<T, Dot>>
>

export type { Segment as default }
