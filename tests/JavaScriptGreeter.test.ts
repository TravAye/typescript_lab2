import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("create greeting and name", () => {
    const result = new JavaScriptGreeter("Hello");
    expect(result.greet("Travis")).toBe("console.log('Hello, Travis!')");
  });
});
