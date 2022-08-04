/**
 * @file Type Definitions - DocumentDeepPartial
 * @module tutils/types/DocumentDeepPartial
 */

import type DUID from './duid'
import type ObjectPlain from './object-plain'
import type ObjectUnknown from './object-unknown'
import type OrDeepPartial from './or-deep-partial'
import type UID from './uid'

/**
 * Object that includes all object properties or a subset.
 *
 * Even when a subset of properties are requested, a partial `Document` response
 * will always include the `id` field, or the selected uid field.
 *
 * @template D - Document (collection object)
 * @template U - Name of document uid field
 */
type DocumentDeepPartial<
  D extends ObjectPlain = ObjectUnknown,
  U extends string = DUID
> = Omit<OrDeepPartial<D>, U> & Record<U, UID>

export { type DocumentDeepPartial as default }