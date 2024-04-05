import * as snippets from "./snippets";

console.log(
  snippets.compact([
    1,
    null,
    {
      m: 1,
      foo: null,
      bar: {
        n: 2,
        t: null,
        baz: {
          z: null,
          s: 1233212312,
        },
      },
    },
  ])
);
