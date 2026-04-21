import { describe, expect, it } from "vitest";
import { signRequest } from "../signature.js";

/**
 * Vector test. The expected hex was computed by this same implementation against
 * a fixed input, then locked. Any future change to the algorithm that breaks
 * parity with Lazada's server will also break this test — at which point we
 * cross-check against the official Java sample in the Lazada developer guide
 * before updating the vector.
 */
describe("signRequest", () => {
  it("produces the locked HMAC-SHA256 signature for a fixed input", () => {
    const sig = signRequest({
      appSecret: "test-secret",
      apiPath: "/order/cancel",
      params: {
        app_key: "123456",
        timestamp: "1700000000000",
        sign_method: "sha256",
        access_token: "test-token",
      },
    });
    expect(sig).toBe(
      "91375F42B474CECEE7172759B6400E74F10FBB6E9E9E145EA2A27DFA17556B18",
    );
  });

  it("matches the documented Java-sample shape for the docs' worked example", () => {
    // Docs: params {foo:1, bar:2, foo_bar:3, foobar:4} + /test/api →
    // sorted concat "bar2foo1foo_bar3foobar4", prefixed by "/test/api".
    // We verified this hex by running our impl; locks the algorithm.
    const sig = signRequest({
      appSecret: "secret",
      apiPath: "/test/api",
      params: { foo: "1", bar: "2", foo_bar: "3", foobar: "4" },
    });
    expect(sig).toBe(
      "C9E42CE09BA9FE95ECCB17111AA4E3F41D1C82F000435219C75936A427D9C945",
    );
  });

  it("sorts parameters in ASCII order regardless of input order", () => {
    const a = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1", bar: "2" },
    });
    const b = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { bar: "2", foo: "1" },
    });
    expect(a).toBe(b);
  });

  it("excludes the sign parameter from the signed payload", () => {
    const a = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1" },
    });
    const b = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1", sign: "whatever" },
    });
    expect(a).toBe(b);
  });

  it("excludes empty/undefined/null values", () => {
    const a = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1" },
    });
    const b = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1", bar: "", baz: undefined, qux: null },
    });
    expect(a).toBe(b);
  });

  it("incorporates the body suffix into the signed payload", () => {
    const withoutBody = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1" },
    });
    const withBody = signRequest({
      appSecret: "k",
      apiPath: "/test",
      params: { foo: "1" },
      body: '{"a":1}',
    });
    expect(withoutBody).not.toBe(withBody);
  });
});
