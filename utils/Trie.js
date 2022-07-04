class Node {
  constructor(value, end) {
    this.keys = {};

    if (typeof end !== "undefined") {
      this.end = end;
    }

    // if (value && value.length) {
    //   this.value = value;
    // }
  }
}

var Trie = function () {
  const node = new Node(0, false);
  this.root = node;
};

Trie.prototype.buildList = function (chars) {
  if (chars.length === 0) {
    const node = new Node("", true);
    return node;
  }
  const isEndChar = chars.length === 0;
  const char = chars.shift();

  const newNode = new Node(char, isEndChar);
  newNode.keys[char] = this.buildList(chars);
  return newNode;
};

/* It will return the node to append the new trie */
Trie.prototype.searchSubtrie = function (subtrie, chars, count, nextTrie) {
  const first = chars.shift();
  const second = chars.length > 0 && chars[0];
  const hasNext = typeof subtrie.keys[first] !== "undefined";
  const hasKeys = typeof subtrie.keys[first] !== "undefined";
  const isLocalRoot = typeof subtrie.keys[first].keys[second] === "undefined";

  let nextTrieShouldBe;
  let previousTrieShouldBe = subtrie;

  if (isLocalRoot) {
    return { node: subtrie.keys[first], count };
  }

  if (hasNext) {
    nextTrieShouldBe = subtrie.keys[first];
    // previousTrieShouldBe = previousTrieShouldBe[first].keys;
  }

  count--;

  return this.searchSubtrie(
    nextTrieShouldBe,
    chars,
    count,
    previousTrieShouldBe
  );
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  //! split word in characters
  const chars = word.split("");

  // check if the word exists
  // if not

  const first = chars[0];
  const subtrie = this.root.keys[first];
  //! check if the first char already exists in keys of root

  if (subtrie) {
    //! TODO
    //! search the trie prefixes to insert the word in the right node
    const { node: localRoot, count } = this.searchSubtrie(
      this.root,
      chars,
      chars.length,
      this.root.keys
    );
    const node = this.buildList(chars);
    localRoot.keys = {
      ...localRoot.keys,
      ...node.keys,
    };
  } else {
    const node = this.buildList([...chars]);
    this.root.keys = { ...this.root.keys, ...node.keys };
  }
};

Trie.prototype.searchRecursively = function (subTrie, chars) {
  const first = chars.shift();
  const nextSubTrie = subTrie.keys[first];
  if (chars.length === 0 && nextSubTrie && nextSubTrie.end) {
    return true;
  }

  if (nextSubTrie) {
    //! search keys of suTrie
    return this.searchRecursively(nextSubTrie, chars);
  }

  return false;
};
/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const chars = word.split("");
  if (!this.root.keys[chars[0]]) {
    return false;
  } else {
    //!subtrie exists

    const exists = this.searchRecursively(this.root, chars);
    return exists;
  }
};

Trie.prototype.startsWithRecursively = function (subTrie, chars) {
  const first = chars.shift();
  const nextSubTrie = subTrie.keys[first];

  if (chars.length === 0 && nextSubTrie) {
    return true;
  }

  if (nextSubTrie) {
    //! search keys of suTrie
    return this.startsWithRecursively(nextSubTrie, chars);
  }

  return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const chars = prefix.split("");
  if (!this.root.keys[chars[0]]) {
    return false;
  } else {
    //!subtrie exists
    const subTrie = this.root.keys[chars[0]];
    const subChars = chars.slice(1);
    const exists = this.startsWithRecursively(subTrie, subChars);
    return exists;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;
