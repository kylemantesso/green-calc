/* exported for testing */
export const _add = (x: string, y: string): string =>
  (parseInt(x, 6) + parseInt(y, 6)).toString(6);
export const _subtract = (x: string, y: string): string =>
  (parseInt(x, 6) - parseInt(y, 6)).toString(6);
export const _divide = (x: string, y: string): string =>
  (parseInt(x, 6) / parseInt(y, 6)).toString(6);
export const _multiply = (x: string, y: string): string =>
  (parseInt(x, 10) * parseInt(y, 10)).toString(6);

export const calc = (integers: string[], operators: string[]): string => {
  const result = integers.reduce((previousValue, currentValue, index) => {
    // Return first integer, no operation to perform
    if (index === 0) {
      return currentValue;
    }

    // Find the correct operator
    const operator = operators[index - 1];

    // Perform, operation
    switch (operator) {
      case "+":
        return _add(previousValue, currentValue);
      case "-":
        return _subtract(previousValue, currentValue);
      case "/":
        return _divide(previousValue, currentValue);
      case "X":
        return _multiply(previousValue, currentValue);
      default:
        return "0";
    }
  });

  // Convert to base 6
  return result.toString();
};
