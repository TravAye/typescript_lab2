import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter", () => {
  test("add extra ! to string", () => {
    const result = new LoudGreeter("Hello");
    result.addVolume();
    expect(result.greet("Travis")).toBe("Hello, Travis!!!");
  });
});
