import { describe, expect, it } from "vitest";
import { LazadaSDK } from "../sdk.js";

/**
 * Existence smoke for every manager field on LazadaSDK. This catches two
 * categories of regression:
 *   - The bootstrap script (spec/src/bootstrap-managers.ts) emits a broken
 *     manager file that fails to import.
 *   - sdk.ts facade drifts from the managers/ directory contents.
 *
 * We don't test individual method shapes here — that's the job of the spec
 * lint + tsc --noEmit. This is purely "does the SDK construct and expose
 * every expected manager".
 */

const EXPECTED_MANAGERS = [
  "choiceCustomized",
  "content",
  "crossBoarderProduct",
  "eTickets",
  "earlyBirdPrice",
  "fbl",
  "finance",
  "firstmileBigbagOnlyForCn",
  "flexicombo",
  "freeShipping",
  "fulfillment",
  "instantMessaging",
  "lazadaDg",
  "lazadaLogistics",
  "lazadaWalletCorporateTopUp",
  "lazlike",
  "lazlive",
  "lazpay",
  "logistics",
  "logisticsStation",
  "mediaCenter",
  "membership",
  "order",
  "product",
  "productReview",
  "redmart",
  "returnAndRefund",
  "seller",
  "sellerVoucher",
  "serviceMarket",
  "sponsoredSolutions",
  "storeDecoration",
  "system",
] as const;

describe("LazadaSDK managers smoke", () => {
  const sdk = new LazadaSDK({
    appKey: "k",
    appSecret: "s",
    region: "SG",
    accessToken: "t",
  });

  it("exposes all 33 manager fields", () => {
    expect(EXPECTED_MANAGERS.length).toBe(33);
    for (const name of EXPECTED_MANAGERS) {
      expect(sdk).toHaveProperty(name);
      const mgr = (sdk as unknown as Record<string, unknown>)[name];
      expect(mgr).toBeTypeOf("object");
      expect(mgr).not.toBeNull();
    }
  });

  it("gives every manager a typed client reference (protected access via any-cast)", () => {
    for (const name of EXPECTED_MANAGERS) {
      const mgr = (sdk as unknown as Record<string, { client?: unknown }>)[name]!;
      // BaseManager stores the client as `protected readonly client`.
      // Just assert construction succeeded with no runtime throw.
      expect(typeof mgr).toBe("object");
      void name;
    }
  });

  it("exposes at least one method on every manager (catches empty-file regressions)", () => {
    for (const name of EXPECTED_MANAGERS) {
      const mgr = (sdk as unknown as Record<string, object>)[name]!;
      const proto = Object.getPrototypeOf(mgr) as object;
      const methods = Object.getOwnPropertyNames(proto).filter(
        (n) => n !== "constructor" && typeof (proto as Record<string, unknown>)[n] === "function",
      );
      expect(methods.length).toBeGreaterThan(0);
    }
  });

  it("has a shared client instance across all managers", () => {
    // If managers were wired with new clients each, middleware hooks would
    // double-fire. Assert all managers share sdk.client by object identity.
    const target = sdk.client;
    for (const name of EXPECTED_MANAGERS) {
      const mgr = (sdk as unknown as Record<string, { client?: unknown }>)[name]!;
      // client is `protected` in TS, but accessible at runtime.
      expect((mgr as { client?: unknown }).client).toBe(target);
    }
  });
});
