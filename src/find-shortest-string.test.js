const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["hello", "all", "ai"])).toBe("ai");
  expect(findShortestString(["cute", "cat", "whale"])).toBe("cat");
});
