const greet = require("./app");

test("prints greeting", () => {
  expect(greet()).toBe("Hello from Node.js Jenkins Pipeline!");
});
