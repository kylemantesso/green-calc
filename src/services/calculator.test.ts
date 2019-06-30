import {_add, _divide, _multiply, _subtract, calc} from "./calculator";

// Given more time would write much more extensive tests here, using for loops
// to loop through a range of hypothesis and expected results

describe("calculator", () => {
  describe("addition", () => {
    it("adds two positive integers", () => {
      const result = _add("5", "3");
      expect(result).toEqual("12");
    });
  });
  describe("subtraction", () => {
    it("subtracts two positive integers", () => {
      const result = _subtract("12", "3");
      expect(result).toEqual("5");
    });
  });
  describe("multiplication", () => {
    it("multiplies two positive integers", () => {
      const result = _multiply("3", "2");
      expect(result).toEqual("10");
    });
  });
  describe("division", () => {
    it("divides two positive integers", () => {
      const result = _divide("10", "2");
      expect(result).toEqual("3");
    });
  });

  // Would do many more tests on this function
  describe("calc", () => {
    it("takes integers and operations and returns the correct result", () => {
      expect(calc(["3","3","3"], ["+","+"])).toEqual("13");
    });
  });
});
