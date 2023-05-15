/**
 * @file Type Definitions - Opaque
 * @module tutils/types/Opaque
 */

/**
 * {@linkcode Opaque} type token key.
 */
export declare const tag: unique symbol

/**
 * Creates an [opaque type][1].
 *
 * An opaque type hides its internal details and can only be created by being
 * used explicitly.
 *
 * The type token parameter, `T`, allows TypeScript to differentiate between
 * opaque types with the same base type.
 *
 * [1]: https://codemix.com/opaque-types-in-javascript
 *
 * @see https://github.com/Microsoft/TypeScript/issues/202
 * @see https://github.com/Microsoft/TypeScript/issues/15408
 * @see https://github.com/Microsoft/TypeScript/issues/15807
 *
 * @template B - Base type
 * @template T - Type token
 */
type Opaque<B, T = unknown> = B & { readonly [tag]: T }

export type { Opaque as default }
