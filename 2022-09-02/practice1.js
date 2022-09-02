describe("주어진 숫자의 n 제곱", function() {
  it("5를 1 제곱하면 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5를 2 제곱하면 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5를 3 제곱하면 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});