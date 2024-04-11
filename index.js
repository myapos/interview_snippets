import * as snippets from "./snippets";
import { JSDOM } from "jsdom";

const dom = new JSDOM();

// for the snippets with dom traversals use this
const doc = new dom.window.DOMParser().parseFromString(
  `<div class="foo">
    <div class="fooz bar">Fooz</div>
    <div class="foo">Foo</div>
  </div>`,
  "text/html"
);

// console.log(snippets.deepOmit({ a: 1, b: 2, c: 3 }, ["b"]));
// console.log(snippets.deepOmit({}, ["b"]));
// console.log(snippets.deepOmit({ a: 1, b: [] }, ["b"]));
// console.log(
//   snippets.deepOmit(
//     {
//       a: 1,
//       b: [
//         {
//           c: 1,
//         },
//         { d: 2 },
//       ],
//     },
//     ["b"]
//   )
// );

// console.log(
//   snippets.deepOmit(
//     {
//       a: 1,
//       b: {
//         c: 1,
//         d: 2,
//       },
//       e: 1,
//     },
//     ["b"]
//   )
// );

// console.log(
//   snippets.deepOmit(
//     {
//       a: 1,
//       b: [
//         {
//           c: 1,
//         },
//         { d: 2 },
//       ],
//     },
//     ["c"]
//   )
// );

// console.log(
//   snippets.deepOmit(
//     {
//       a: 1,
//       b: [],
//     },
//     ["a"]
//   )
// );

console.log(
  snippets.deepOmit(
    {
      a: 1,
      b: 2,
      c: 3,
    },
    ["a"]
  )
);

console.log(
  snippets.deepOmit(
    {
      a: [],
    },
    ["a"]
  )
);
