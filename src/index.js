module.exports = function reverse (n) {
  let numToStr = '' + Math.sqrt(Math.pow(n, 2));
  let reverseStr = numToStr.split('').reverse().join('');

  return Number(reverseStr)
}
