import * as data from "./";

function loadTrie() {
  var trie = new utils.Trie();
  const { strings, actions, expected } = data;
  const output = [];
  strings.shift();
  actions.shift();
  expected.shift();

  console.log("strings", strings.length);
  console.log("actions", actions.length);
  actions.forEach((action, index) => {
    const [word] = strings[index];

    // if (word.match(/thro/gi)) {
    //   debugger;
    // }
    // if (word === "ben" && action === "insert") {
    //   debugger;
    // }
    // if (word === "ben" && action === "search") {
    //   debugger;
    // }
    // console.log("action", action, word);
    const out = trie[action](word);
    if (out !== expected[index]) {
      console.log(
        "out",
        out,
        "exp",
        expected[index],
        " action",
        action,
        " word",
        word
      );
      output.push(out);
    }
  });

  console.log(output);
}

export default loadTrie;
