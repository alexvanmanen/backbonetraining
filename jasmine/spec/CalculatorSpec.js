describe("Calculator", function() {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to add two numbers", function() {
    let result = calculator.add(4,3);
    expect(result).toEqual(7);
  });

});
