/**
 * @file Type Definitions - IndexSignature
 * @module tutils/types/IndexSignature
 */

import type NumberString from './number-string'

/**
 * Object [index signatures][1].
 *
 * [1]: https://basarat.gitbook.io/typescript/type-system/index-signatures
 */
type IndexSignature = NumberString | symbol

export type { IndexSignature as default }
