import * as snippets from "./snippets";

console.log(
  snippets.textSearch("The Quick Brown Fox Jumps Over The Lazy Dog", "fox")
);

console.log(
  snippets.textSearch("The hardworking Dog overtakes the lazy dog", "dog")
);

console.log(snippets.textSearch("aaa", "aa"));
console.log(snippets.textSearch("aaaa", "aa"));
console.log(snippets.textSearch("aaaa", ""));
console.log(snippets.textSearch("aaaa me lene myro aa aa aaa", "aa"));
console.log(snippets.textSearch("", "aa"));
console.log(snippets.textSearch("      br br", "br"));
console.log(
  snippets.textSearch("The Quick Brown Fox Jumps Over The Lazy Dog", "QUICK")
);

console.log(
  snippets.textSearch("The quick brown fox jumps over the lazy dog", "he")
);
