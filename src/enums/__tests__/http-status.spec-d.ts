/**
 * @file Type Tests - HttpStatus
 * @module tutils/enums/tests/unit-d/HttpStatus
 */

import type TestSubject from '../http-status'

describe('unit-d:enums/HttpStatus', () => {
  it('should match [CONTINUE = 100]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONTINUE')
      .toEqualTypeOf<100>()
  })

  it('should match [SWITCHING_PROTOCOLS = 101]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SWITCHING_PROTOCOLS')
      .toEqualTypeOf<101>()
  })

  it('should match [PROCESSING = 102]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROCESSING')
      .toEqualTypeOf<102>()
  })

  it('should match [EARLYHINTS = 103]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EARLYHINTS')
      .toEqualTypeOf<103>()
  })

  it('should match [OK = 200]', () => {
    expectTypeOf<typeof TestSubject>().toHaveProperty('OK').toEqualTypeOf<200>()
  })

  it('should match [CREATED = 201]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CREATED')
      .toEqualTypeOf<201>()
  })

  it('should match [ACCEPTED = 202]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ACCEPTED')
      .toEqualTypeOf<202>()
  })

  it('should match [NON_AUTHORITATIVE_INFORMATION = 203]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NON_AUTHORITATIVE_INFORMATION')
      .toEqualTypeOf<203>()
  })

  it('should match [NO_CONTENT = 204]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NO_CONTENT')
      .toEqualTypeOf<204>()
  })

  it('should match [RESET_CONTENT = 205]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RESET_CONTENT')
      .toEqualTypeOf<205>()
  })

  it('should match [PARTIAL_CONTENT = 206]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PARTIAL_CONTENT')
      .toEqualTypeOf<206>()
  })

  it('should match [MULTI_STATUS = 207]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MULTI_STATUS')
      .toEqualTypeOf<207>()
  })

  it('should match [ALREADY_REPORTED = 208]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ALREADY_REPORTED')
      .toEqualTypeOf<208>()
  })

  it('should match [IM_USED = 226]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IM_USED')
      .toEqualTypeOf<226>()
  })

  it('should match [AMBIGUOUS = 300]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('AMBIGUOUS')
      .toEqualTypeOf<300>()
  })

  it('should match [MOVED_PERMANENTLY = 301]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MOVED_PERMANENTLY')
      .toEqualTypeOf<301>()
  })

  it('should match [FOUND = 302]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FOUND')
      .toEqualTypeOf<302>()
  })

  it('should match [SEE_OTHER = 303]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SEE_OTHER')
      .toEqualTypeOf<303>()
  })

  it('should match [NOT_MODIFIED = 304]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_MODIFIED')
      .toEqualTypeOf<304>()
  })

  it('should match [TEMPORARY_REDIRECT = 307]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TEMPORARY_REDIRECT')
      .toEqualTypeOf<307>()
  })

  it('should match [PERMANENT_REDIRECT = 308]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PERMANENT_REDIRECT')
      .toEqualTypeOf<308>()
  })

  it('should match [BAD_REQUEST = 400]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_REQUEST')
      .toEqualTypeOf<400>()
  })

  it('should match [UNAUTHORIZED = 401]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAUTHORIZED')
      .toEqualTypeOf<401>()
  })

  it('should match [PAYMENT_REQUIRED = 402]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYMENT_REQUIRED')
      .toEqualTypeOf<402>()
  })

  it('should match [FORBIDDEN = 403]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FORBIDDEN')
      .toEqualTypeOf<403>()
  })

  it('should match [NOT_FOUND = 404]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_FOUND')
      .toEqualTypeOf<404>()
  })

  it('should match [METHOD_NOT_ALLOWED = 405]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD_NOT_ALLOWED')
      .toEqualTypeOf<405>()
  })

  it('should match [NOT_ACCEPTABLE = 406]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_ACCEPTABLE')
      .toEqualTypeOf<406>()
  })

  it('should match [PROXY_AUTHENTICATION_REQUIRED = 407]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROXY_AUTHENTICATION_REQUIRED')
      .toEqualTypeOf<407>()
  })

  it('should match [REQUEST_TIMEOUT = 408]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_TIMEOUT')
      .toEqualTypeOf<408>()
  })

  it('should match [CONFLICT = 409]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONFLICT')
      .toEqualTypeOf<409>()
  })

  it('should match [GONE = 410]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GONE')
      .toEqualTypeOf<410>()
  })

  it('should match [LENGTH_REQUIRED = 411]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LENGTH_REQUIRED')
      .toEqualTypeOf<411>()
  })

  it('should match [PRECONDITION_FAILED = 412]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_FAILED')
      .toEqualTypeOf<412>()
  })

  it('should match [PAYLOAD_TOO_LARGE = 413]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYLOAD_TOO_LARGE')
      .toEqualTypeOf<413>()
  })

  it('should match [URI_TOO_LONG = 414]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('URI_TOO_LONG')
      .toEqualTypeOf<414>()
  })

  it('should match [UNSUPPORTED_MEDIA_TYPE = 415]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNSUPPORTED_MEDIA_TYPE')
      .toEqualTypeOf<415>()
  })

  it('should match [RANGE_NOT_SATISFIABLE = 416]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RANGE_NOT_SATISFIABLE')
      .toEqualTypeOf<416>()
  })

  it('should match [EXPECTATION_FAILED = 417]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPECTATION_FAILED')
      .toEqualTypeOf<417>()
  })

  it('should match [IM_A_TEAPOT = 418]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IM_A_TEAPOT')
      .toEqualTypeOf<418>()
  })

  it('should match [MISDIRECTED = 421]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MISDIRECTED')
      .toEqualTypeOf<421>()
  })

  it('should match [UNPROCESSABLE_ENTITY = 422]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNPROCESSABLE_ENTITY')
      .toEqualTypeOf<422>()
  })

  it('should match [LOCKED = 423]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOCKED')
      .toEqualTypeOf<423>()
  })

  it('should match [FAILED_DEPENDENCY = 424]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FAILED_DEPENDENCY')
      .toEqualTypeOf<424>()
  })

  it('should match [TOO_EARLY = 425]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_EARLY')
      .toEqualTypeOf<425>()
  })

  it('should match [UPGRADE_REQUIRED = 426]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UPGRADE_REQUIRED')
      .toEqualTypeOf<426>()
  })

  it('should match [PRECONDITION_REQUIRED = 428]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_REQUIRED')
      .toEqualTypeOf<428>()
  })

  it('should match [TOO_MANY_REQUESTS = 429]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_MANY_REQUESTS')
      .toEqualTypeOf<429>()
  })

  it('should match [HEADER_FIELDS_TOO_LARGE = 431]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HEADER_FIELDS_TOO_LARGE')
      .toEqualTypeOf<431>()
  })

  it('should match [UNAVAILABLE_FOR_LEGAL_REASONS = 451]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAVAILABLE_FOR_LEGAL_REASONS')
      .toEqualTypeOf<451>()
  })

  it('should match [INTERNAL_SERVER_ERROR = 500]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL_SERVER_ERROR')
      .toEqualTypeOf<500>()
  })

  it('should match [NOT_IMPLEMENTED = 501]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_IMPLEMENTED')
      .toEqualTypeOf<501>()
  })

  it('should match [BAD_GATEWAY = 502]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_GATEWAY')
      .toEqualTypeOf<502>()
  })

  it('should match [SERVICE_UNAVAILABLE = 503]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICE_UNAVAILABLE')
      .toEqualTypeOf<503>()
  })

  it('should match [GATEWAY_TIMEOUT = 504]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GATEWAY_TIMEOUT')
      .toEqualTypeOf<504>()
  })

  it('should match [HTTP_VERSION_NOT_SUPPORTED = 505]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HTTP_VERSION_NOT_SUPPORTED')
      .toEqualTypeOf<505>()
  })

  it('should match [VARIANT_NEGOTIATES = 506]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VARIANT_NEGOTIATES')
      .toEqualTypeOf<506>()
  })

  it('should match [INSUFFICIENT_STORAGE = 507]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INSUFFICIENT_STORAGE')
      .toEqualTypeOf<507>()
  })

  it('should match [LOOP_DETECTED = 508]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOOP_DETECTED')
      .toEqualTypeOf<508>()
  })

  it('should match [NOT_EXTENDED = 510]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_EXTENDED')
      .toEqualTypeOf<510>()
  })

  it('should match [NETWORK_AUTHENTICATION_REQUIRED = 511]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NETWORK_AUTHENTICATION_REQUIRED')
      .toEqualTypeOf<511>()
  })
})
