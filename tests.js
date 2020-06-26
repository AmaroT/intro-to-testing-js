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
    it('the string, "Hello, World!" should return true', function(){
        expect(isStringTrue(true)).toBe("Hello, World!");
    });
    it('the string, "Hello, World!" should return false', function(){
        expect(isStringTrue(false)).toBe("Hello, World!");
    });
    it('if null return the string, "Hello, World!" if', function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('if empty string return, "Hello, World!"', function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('if numeric return, "Hello, World!"', function(){
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('if random input in the string, "Hello, World!"', function(){
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('if an array return, "Hello, World!"', function(){
        expect(sayHello([])).toBe("Hello, World!");
    });
});
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return false if 5 is in a string', function(){
        expect(isFive("5")).toBe(false);
    });
});
describe('isEven', function(){
    it('should return boolean',function(){
        expect(typeof isEven).toBe('function')
    });
    it('should return true with the number 2', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true with the number negative 4', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false with the number 3', function (){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with "banana"', function(){
        expect(isEven(String('banana'))).toBe(false);
    });
    it('should return true when called with "8"', function(){
        expect(isEven(String("8"))).toBe(true);
    });
    it('should return false when called with Infinity', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when boolean is the input',function(){
        expect(isEven(Boolean)).toBe(false)
    });
    it('should return false without passing an argument', function(){
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function() {
    it('should return a boolean', function () {
        expect(typeof isVowel(0)).toBe('boolean');
        expect(typeof isVowel(1)).toBe('boolean');
    });
    it('should return true when the letter a is passed', function () {
        expect(isVowel(String("a"))).toBe(true);
    });
    it('should return true when the letter A is passed', function(){

        expect(isVowel(String("A"))).toBe(true);
    });
    it('should return false when the letter y is passed', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 is passed', function(){
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when input of boolean is passed', function(){
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when input "banana" is passed', function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false without passing an argument', function(){
        expect(isVowel()).toBe(false);
    });
});
