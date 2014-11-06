describe("Hello World", function() {
  it("Says hello", function() {
    expect(helloWorld()).toBe("Hello World!");
  });

  it("Contain hello", function(){
    expect(helloWorld()).toMatch('Hello');
  })
});