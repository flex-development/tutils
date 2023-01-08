/**
 * @file Type Definitions - LiteralUnion
 * @module tutils/types/LiteralUnion
 */

import type Primitive from './primitive'

/**
 * Creates a a union type by combining primitive types and literal types without
 * sacrificing auto-completion in IDEs for the literal type part of the union.
 *
 * Currently, when a union type of a primitive type is combined with literal
 * types, TypeScript loses all information about the combined literals. Thus,
 * when such type is used in an IDE with autocompletion, no suggestions are made
 * for the declared literals.
 *
 * This is a workaround for [`Microsoft/TypeScript#29729`][1].
 *
 * [1]: https://github.com/Microsoft/TypeScript/issues/29729
 *
 * @template L - Literal type(s)
 * @template P - Primitive type(s)
 *
 * @example
 *  import type { LiteralUnion } from '@flex-development/tutils'
 *
 *  type NonPet = 'tiger' | 'wolf' | string
 *  // start typing in your typescript-enabled ide
 *  // notice the lack of auto-completion for `tiger` and `wolf` literals
 *
 *  type Pet = LiteralUnion<'dog' | 'cat', string>
 *  // start typing in your typescript-enabled ide
 *  // notice the auto-completion for `dog` and `cat` literals
 */
type LiteralUnion<L, P extends Primitive> = L | (P & Record<never, never>)

export type { LiteralUnion as default }
