import { describe, expect, it } from "vitest";
import {
  classifyError,
  LazadaApiError,
  LazadaAuthError,
  LazadaRateLimitError,
  LazadaValidationError,
} from "../errors.js";

function mkArgs(code: string, type = "ISV") {
  return { code, type, message: `err ${code}` };
}

describe("classifyError", () => {
  it("routes known auth codes to LazadaAuthError", () => {
    const authCodes = [
      "IncompleteSignature",
      "InvalidCode",
      "APP_KEY_INVALID",
      "AUTH_TYPE_UNSUPPORTED",
      "InvalidAppKey",
      "AccessTokenInvalid",
      "AccessTokenExpired",
    ];
    for (const code of authCodes) {
      const err = classifyError(mkArgs(code));
      expect(err).toBeInstanceOf(LazadaAuthError);
      expect(err).toBeInstanceOf(LazadaApiError);
      expect(err.code).toBe(code);
    }
  });

  it("routes known rate-limit codes to LazadaRateLimitError", () => {
    for (const code of ["IopSystemFlowlimit", "ServiceCurrentlimit"]) {
      const err = classifyError(mkArgs(code));
      expect(err).toBeInstanceOf(LazadaRateLimitError);
    }
  });

  it("routes the ISP error family and E-numbered codes to LazadaValidationError", () => {
    // type = ISP
    const ispErr = classifyError({ code: "SomeCode", type: "ISP", message: "x" });
    expect(ispErr).toBeInstanceOf(LazadaValidationError);

    // E\d+ codes regardless of type
    for (const code of ["E0001", "E0006", "E0208", "E1000", "E9999"]) {
      const err = classifyError(mkArgs(code));
      expect(err).toBeInstanceOf(LazadaValidationError);
    }
  });

  it("falls back to base LazadaApiError for unknown codes", () => {
    for (const code of ["20", "700040", "SomeUnknownCode", "DUPLICATE_REQUEST"]) {
      const err = classifyError(mkArgs(code));
      expect(err).toBeInstanceOf(LazadaApiError);
      // Should NOT be any of the specific subclasses.
      expect(err).not.toBeInstanceOf(LazadaAuthError);
      expect(err).not.toBeInstanceOf(LazadaRateLimitError);
      expect(err).not.toBeInstanceOf(LazadaValidationError);
    }
  });

  it("preserves all fields on the constructed error", () => {
    const err = classifyError({
      code: "20",
      type: "ISV",
      message: "Invalid ID",
      requestId: "req-123",
      raw: { extra: true },
    });
    expect(err.code).toBe("20");
    expect(err.type).toBe("ISV");
    expect(err.message).toBe("Invalid ID");
    expect(err.requestId).toBe("req-123");
    expect(err.raw).toEqual({ extra: true });
    expect(err.name).toBe("LazadaApiError");
  });

  it("sets the correct .name on each subclass for stack-trace readability", () => {
    expect(classifyError(mkArgs("IncompleteSignature")).name).toBe("LazadaAuthError");
    expect(classifyError(mkArgs("IopSystemFlowlimit")).name).toBe("LazadaRateLimitError");
    expect(classifyError(mkArgs("E0001")).name).toBe("LazadaValidationError");
    expect(classifyError(mkArgs("20")).name).toBe("LazadaApiError");
  });

  it("treats numeric codes as strings (no accidental type coercion)", () => {
    const err = classifyError({ code: "700040", type: "ISV", message: "x" });
    expect(typeof err.code).toBe("string");
    expect(err.code).toBe("700040");
  });
});
