import * as snippets from "./snippets";

console.log(snippets.jsonStringify(null));
console.log(snippets.jsonStringify(1));
console.log(snippets.jsonStringify("1"));
console.log(snippets.jsonStringify([1, 5, 6, 8]));
console.log(snippets.jsonStringify({ foo: "bar" }));
console.log(
  snippets.jsonStringify({
    foo: {
      bar: true,
    },
  })
);

console.log(snippets.jsonStringify({ bar: [1, 2, 3] }));
console.log(snippets.jsonStringify({ bar: true }));
console.log(
  snippets.jsonStringify({
    foo: {
      bar: true,
    },
  })
);

// console.log(
//   snippets.jsonStringify({
//     bar: [
//       {
//         test: true,
//         test2: 1,
//       },
//     ],
//   })
// );

console.log(
  snippets.jsonStringify({
    bar: [
      {
        test: true,
        test2: 1,
        test3: [
          1,
          {
            test4: "2",
            test5: ["fddfd"],
          },
        ],
      },
    ],
  })
);
