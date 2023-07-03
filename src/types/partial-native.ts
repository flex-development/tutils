/**
 * @file Type Definitions - PartialNative
 * @module tutils/types/PartialNative
 */

/**
 * Constructs a type with all properties of `T` set to optional.
 *
 * This utility will return a type that represents all subsets of a given type.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 *
 * @template T - Type to evaluate
 */
type PartialNative<T> = Partial<T>

export type { PartialNative as default }
