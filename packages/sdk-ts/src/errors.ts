/**
 * Base error for all non-2xx / non-zero-code responses from Lazada.
 *
 * Lazada returns errors in the 200-OK body with a non-zero `code` field.
 * `code` can be numeric-as-string ("20", "700040") or symbolic
 * ("MissingParameter", "IncompleteSignature", "APP_KEY_INVALID").
 */
export class LazadaApiError extends Error {
  readonly code: string;
  readonly type: string;
  readonly requestId?: string;
  readonly raw: unknown;

  constructor(args: {
    code: string;
    type: string;
    message: string;
    requestId?: string;
    raw?: unknown;
  }) {
    super(args.message);
    this.name = "LazadaApiError";
    this.code = args.code;
    this.type = args.type;
    if (args.requestId !== undefined) this.requestId = args.requestId;
    this.raw = args.raw;
  }
}

export class LazadaAuthError extends LazadaApiError {
  constructor(args: ConstructorParameters<typeof LazadaApiError>[0]) {
    super(args);
    this.name = "LazadaAuthError";
  }
}

export class LazadaRateLimitError extends LazadaApiError {
  constructor(args: ConstructorParameters<typeof LazadaApiError>[0]) {
    super(args);
    this.name = "LazadaRateLimitError";
  }
}

export class LazadaValidationError extends LazadaApiError {
  constructor(args: ConstructorParameters<typeof LazadaApiError>[0]) {
    super(args);
    this.name = "LazadaValidationError";
  }
}

const AUTH_CODES = new Set([
  "IncompleteSignature",
  "InvalidCode",
  "APP_KEY_INVALID",
  "AUTH_TYPE_UNSUPPORTED",
  "InvalidAppKey",
  "AccessTokenInvalid",
  "AccessTokenExpired",
]);

const RATE_LIMIT_CODES = new Set(["IopSystemFlowlimit", "ServiceCurrentlimit"]);

export function classifyError(args: {
  code: string;
  type: string;
  message: string;
  requestId?: string;
  raw?: unknown;
}): LazadaApiError {
  if (AUTH_CODES.has(args.code)) return new LazadaAuthError(args);
  if (RATE_LIMIT_CODES.has(args.code)) return new LazadaRateLimitError(args);
  if (args.type === "ISP" || /^E\d+$/.test(args.code)) return new LazadaValidationError(args);
  return new LazadaApiError(args);
}
