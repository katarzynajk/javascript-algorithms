const oddOrEven = require(".");

describe("oddOrEven", () => {
  it("should return a string even for the number 30", () => {
    expect(oddOrEven(30)).toEqual("even");
  });

  it("should return a string odd for the number 17", () => {
    expect(oddOrEven(17)).toEqual("odd");
  });

  it("should return a string even for the number 0", () => {
    expect(oddOrEven(0)).toEqual("even");
  });
});
