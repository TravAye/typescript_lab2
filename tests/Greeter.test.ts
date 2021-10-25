import { Greeter } from "../src/greeter";

describe("Greeter", () => {
  test("create greeting and name", () => {
    const result = new Greeter("Hello");
    expect(result.greet("Travis")).toBe("Hello, Travis!");
  });
});
