import * as snippets from "./snippets";
import { JSDOM } from "jsdom";

const dom = new JSDOM();

// for the snippets with dom traversals use this
// const doc = new dom.window.DOMParser().parseFromString(
//   `<body>
//     <h2>Heading2a</h2>
//     <h1>Heading1</h1>
//     <h2>Heading2b</h2>
//     <h3>Heading3a</h3>
//     <h3>Heading3b</h3>
//     <h4>Heading4</h4>
//     <h2>Heading2c</h2>
//   </body>`,
//   "text/html"
// );

// const obj1 = {
//   num: 0,
//   str: "",
//   boolean: true,
//   unf: undefined,
//   nul: null,
//   obj: { name: "foo", id: 1 },
//   arr: [0, 1, 2],
//   date: new Date(),
//   reg: new RegExp("/bar/ig"),
//   [Symbol("s")]: "baz",
// };
var object = { a: 1, b: 2 };
// console.log(snippets.conformsTo({}, { b: (n) => n > 1 }));
// console.log(snippets.conformsTo({ a: 1, b: 2 }, { b: (n) => n > 1 }));
// console.log(
//   snippets.conformsTo(
//     { a: 1, b: 2 },
//     {
//       a: function (n) {
//         return n > 1;
//       },
//       b: function (n) {
//         return n > 1;
//       },
//     }
//   )
// );
// console.log(
//   snippets.conformsTo(
//     { a: 1, b: 2 },
//     {
//       a: function (n) {
//         return n >= 1;
//       },
//       b: function (n) {
//         return n > 1;
//       },
//     }
//   )
// );
// console.log(snippets.conformsTo({ a: 1, b: 2 }, { b: (n) => n > 2 }));
// console.log(
//   snippets.conformsTo(
//     { a: undefined, b: null },
//     {
//       a: (value) => value === undefined,
//       b: (value) => value === null,
//     }
//   )
// );
// console.log(
//   snippets.conformsTo(
//     { a: null, b: undefined },
//     {
//       a: (value) => value === undefined,
//       b: (value) => value === null,
//     }
//   )
// );
// console.log(snippets.conformsTo({ a: 1 }, { c: (value) => value > 0 }));
console.log(snippets.conformsTo({ b: -1 }, { c: (value) => value > 0 }));
// console.log(
//   snippets.conformsTo(
//     { a: 1 },
//     {
//       b: function (n) {
//         return n > 1;
//       },
//     }
//   )
// );

// console.log(
//   snippets.conformsTo(
//     { a: 1 },
//     {
//       b: 1,
//     }
//   )
// );
