describe("Exercise 1", function() {

  it("should be able to return a simple string dollar and cents expression", function() {
    var amount = 6.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("six and 00/100 dollars");
  });

  it("should be able to return dollars and cents", function() {
    var amount = 8.43;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("eight and 43/100 dollars");
  });

  it("should be able to return a hundred dollars", function() {
    var amount = 100.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one hundred and 00/100 dollars");
  });

  it("should be able to return a hundred and six dollars", function() {
    var amount = 106.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one hundred six and 00/100 dollars");
  });

  it("should be able to return a thousand dollars", function() {
    var amount = 1000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one thousand and 00/100 dollars");
  });

  it("should be able to return a thousand and nine dollars", function() {
    var amount = 1009.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one thousand nine and 00/100 dollars");
  });

  it("should be able to return a tens of thousands of dollars", function() {
    var amount = 90000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("ninety thousand and 00/100 dollars");
  });

  it("should be able to return a tens of thousands and five dollars", function() {
    var amount = 30005.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("thirty thousand five and 00/100 dollars");
  });

  it("should be able to return a hundred thousand dollars", function() {
    var amount = 500000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("five hundred thousand and 00/100 dollars");
  });

  it("should be able to return a hundred thousand and six dollars", function() {
    var amount = 400006.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("four hundred thousand six and 00/100 dollars");
  });

  it("should be able to return a hundred thousand and a hundred and seven dollars", function() {
    var amount = 200107.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("two hundred thousand one hundred seven and 00/100 dollars");
  });

  it("should be able to return a hundred and one thousand dollars", function() {
    var amount = 301000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("three hundred one thousand and 00/100 dollars");
  });

  it("should be able to return a hundred and fifteen thousand dollars", function() {
    var amount = 215000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("two hundred fifteen thousand and 00/100 dollars");
  });

  it("should be able to return a million dollars", function() {
    var amount = 1000000.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one million and 00/100 dollars");
  });

  it("should be able to return a million dollars and one", function() {
    var amount = 1000001.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one million one and 00/100 dollars");
  });

  it("should be able to return a million dollars and two hundred and fourteen", function() {
    var amount = 1000214.00;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one million two hundred fourteen and 00/100 dollars");
  });

  it("should be able to return more complex tens figures", function() {
    var amount = 53.78;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("fifty-three and 78/100 dollars");
  });

  it("should be able to return more complex hundreds figures", function() {
    var amount = 437.99;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("four hundred thirty-seven and 99/100 dollars");
  });

  it("should be able to return more complex thousands figures", function() {
    var amount = 3456.78;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("three thousand four hundred fifty-six and 78/100 dollars");
  });

  it("should be able to return more complex tens of thousands figures", function() {
    var amount = 65432.11;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("sixty-five thousand four hundred thirty-two and 11/100 dollars");
  });

  it("should be able to return more complex hundreds of thousands figures", function() {
    var amount = 876543.21;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("eight hundred seventy-six thousand five hundred forty-three and 21/100 dollars");
  });

  it("should be able to return more complex millions figures", function() {
    var amount = 1234567.89;
    expect(converter.total(converter.cash(amount), converter.change(amount)))
    .toEqual("one million two hundred thirty-four thousand five hundred sixty-seven and 89/100 dollars");
  });
});