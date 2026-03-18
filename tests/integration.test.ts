import { describe, it, expect } from "vitest";
import { Agentcore } from "../src/core.js";

describe("Agentcore integration", () => {
  it("handles concurrent ops", async () => {
    const c = new Agentcore();
    await Promise.all([c.think({a:1}), c.think({b:2}), c.think({c:3})]);
    expect(c.getStats().ops).toBe(3);
  });
  it("returns service name", async () => {
    const c = new Agentcore();
    const r = await c.think();
    expect(r.service).toBe("agentcore");
  });
  it("handles 100 ops", async () => {
    const c = new Agentcore();
    for (let i = 0; i < 100; i++) await c.think({i});
    expect(c.getStats().ops).toBe(100);
  });
});
