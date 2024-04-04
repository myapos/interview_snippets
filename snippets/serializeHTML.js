// https://www.greatfrontend.com/questions/javascript/html-serializer

/**
 * @param {Object} element
 * @return {string}
 */
export default function serializeHTML(element) {
  if (Object.keys(element).length === 0) return ``;

  // parse tree recursively dfs way
  let serialized = ``;
  let levels = 0;

  function parse(root) {
    if (root.children === undefined || root.children.length === 0) {
      serialized = `${serialized}${`\t`.repeat(levels)}${root}\n`;
      return;
    }

    serialized = `${serialized}${`\t`.repeat(levels)}<${root.tag}>\n`;
    for (let i = 0; i < root.children.length; i++) {
      const child = root.children[i];
      levels++;
      parse(child);
      levels--;
    }
    serialized = `${serialized}${`\t`.repeat(levels)}</${root.tag}>${
      levels > 0 ? "\n" : ""
    }`;
  }

  parse(element);
  return serialized;
}
