/**
 * @file Type Definitions - DocumentDeepPartial
 * @module tutils/types/DocumentDeepPartial
 */

import type DUID from './duid.type'
import type ObjectPlain from './object-plain.type'
import type ObjectUnknown from './object-unknown.type'
import type OrDeepPartial from './or-deep-partial.type'
import type UID from './uid.type'

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

export default DocumentDeepPartial
