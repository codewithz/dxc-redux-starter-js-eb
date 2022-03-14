import { pipe } from 'lodash/fp';

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const lowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`;


const wrap = (type, str) => `<${type}>${str}</${type}>`

const result = wrapInDiv(trim(lowerCase(input)));
console.log('Result', result);

//pipe() creates a pipe of functions from left to right
let transform = pipe(trim, lowerCase, wrapInDiv);

const newResult = transform(input);
console.log('New Result', newResult);

//pipe() creates a pipe of functions from left to right
let transformSpan = pipe(trim, lowerCase, wrapInSpan);

const newSpanResult = transformSpan(input);
console.log('New Result SPan', newSpanResult);

// Creating the pipe 

let newTransform = pipe(trim, lowerCase, wrap("div"));
const newTrasnformResult = newTransform(input);
console.log('Resulttt', newTrasnformResult);