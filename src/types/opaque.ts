/**
 * @file Type Definitions - Opaque
 * @module tutils/types/Opaque
 */

/**
 * Token symbol for {@linkcode Opaque}.
 */
declare const token: unique symbol

/**
 * Creates an [opaque type][1].
 *
 * An opaque type hides its internal details and can only be created by being
 * used explicitly.
 *
 * The type token parameter, `T`, allows TypeScript to differentiate between
 * opaque types with the same base type.
 *
 * [1]: https://codemix.com/opaque-types-in-javascript/
 *
 * @template B - Base type
 * @template T - Type token
 */
type Opaque<B, T = unknown> = B & { readonly [token]: T }

export type { Opaque as default }
