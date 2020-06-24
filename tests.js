// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called", function () {
        expect(typeof emptyString()).toBe('string');
    });
    it("should return the string, 'Hello, Jane!'", function () {
        expect(sayHelloJane('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!"', function(){
       expect(sayHelloAlex('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!"', function(){
        expect(sayHelloPat('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string, "Hello, World"', function (){
        expect(sayHello('World')).toBe("Hello, World!");
    });
    it('the string, "Hello, World!" should return true', function(){
        expect(isStringTrue(true)).toBe("Hello, World!");
    });
    it('the string, "Hello, World!" should return false', function(){
        expect(isStringTrue(false)).toBe("Hello, World!");
    })

});
