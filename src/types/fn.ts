/**
 * @file Type Definitions - Fn
 * @module tutils/types/Fn
 */

import type ANY from './any'

/**
 * A function.
 *
 * @template Args - Arguments type
 * @template Ret - Return type
 */
type Fn<Args extends ANY[] = ANY[], Ret extends ANY = ANY> = (
  ...args: Args
) => Ret

export type { Fn as default }
