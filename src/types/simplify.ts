/**
 * @file Type Definitions - Simplify
 * @module tutils/types/Simplify
 */

/**
 * Simplifies a complex type.
 *
 * Useful for improving IDE type hints and transforming interfaces into types.
 *
 * @see https://github.com/microsoft/TypeScript/issues/15300
 *
 * @template T - Type to evaluate
 */
type Simplify<T> = { [K in keyof T]: T[K] } & {}

export type { Simplify as default }
