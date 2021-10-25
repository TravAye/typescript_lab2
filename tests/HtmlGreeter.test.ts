import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter", () => {
  test("create <h1> at beginging and end of string", () => {
    const result = new HtmlGreeter("Hello");
    expect(result.greet("Travis")).toBe("<h1>Hello, Travis!</h1>");
  });
});
