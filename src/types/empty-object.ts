/**
 * @file Type Definitions - EmptyObject
 * @module tutils/types/EmptyObject
 */

/**
 * Unique {@linkcode EmptyObject} symbol.
 *
 * @internal
 *
 * @const {symbol} tag
 */
export declare const tag: unique symbol

/**
 * An empty object.
 */
type EmptyObject = { [tag]?: never }

export type { EmptyObject as default }
