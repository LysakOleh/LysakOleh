const greet = name => `Hello, ${name}!`;
orange

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape

const findLargestNumber = numbers => Math.max(...numbers);
console.log(getRandomString());

const getUniqueValues = array => [...new Set(array)];
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
17 / 62
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
53 / true
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

70 / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const getRandomElement = array => array[getRandomIndex(array)];
