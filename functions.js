//Mincho answers for PROS.

functionsAnswers = {
  /**
   * Calls a function fn with the arguments supplied in an array arr
   *
   * Example: argsAsArray(Math.max, [1, 2, 3, 4, 5, 6])
   * should be 6, the same as Math.max(1, 2, 3, 4, 5, 6);
   *
   * @param {Function} fn - A function to be called
   * @param {[]} arr - An array of values to be passed to fn
   * @returns Whatever fn would return
   */
  argsAsArray: function argsAsArray(fn, arr) {
    // Not very clear to me but, if
    // it has to produce the number of elements in an array
    var arg = arr.length;
    function fn(arg){
      return arg;
    };
    /*Or it has to produce the maximum number in an array. The documentation says
    * it has to be used with the apply methode. Bellow is the link I have used
    * to simulate math.max behavior
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    */
    return fn.apply(argsArray, arr);
  },

  /**
   * Makes a function, that when called, will return the string
   * of text beginning with str + ', ';
   *
   * Example: functionFunction('Hello') should return a function that takes
   * 1 argument, and returns 'Hello, ' + that 1 argument. So
   * functionFunction('Hello')('world') should be 'Hello, world'.
   *
   * @param {String} str - a string that will appear at the beginning of
   * any string returned by the function returned from functionFunction.
   * @returns {Function} A function that takes 1 argument, and returns a string
   * that begins with str + ', ' + that 1 argument.
   */
  functionFunction: function functionFunction(str) {
    let text = str + ', ';
    return function(str){
      return text = text + str;
    }
  },
};
