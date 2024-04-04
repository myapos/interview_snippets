const hasSameAttributes = (nodeA, nodeB) => {
  const attrNodeA = Array.from(nodeA.attributes);
  const attrNodeB = Array.from(nodeB.attributes);

  if (attrNodeA.length != attrNodeB.length) {
    return false;
  }

  return attrNodeA.every(({ name, value }, idx) => {
    return name === attrNodeB[idx].name && value === attrNodeB[idx].value;
  });
};
/**
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {boolean}
 */
export default function identicalDOMTrees(nodeA, nodeB) {
  let areIdentical = true;

  if (nodeA.children.length !== nodeB.children.length) {
    return false;
  }

  const traverse = (nodeA, nodeB) => {
    const hasSameAttr = hasSameAttributes(nodeA, nodeB);

    if (
      (!nodeA.hasChildNodes() && nodeB.hasChildNodes()) ||
      (nodeA.hasChildNodes() && !nodeB.hasChildNodes())
    ) {
      areIdentical = false;
      return false;
    }

    if (nodeA.innerHTML !== nodeB.innerHTML) {
      areIdentical = false;
      return false;
    }

    if (nodeA.nodeName !== nodeB.nodeName || !hasSameAttr) {
      areIdentical = false;
      return;
    }

    // loop all the childNodes of the first node
    for (let i = 0; i < nodeA.children.length; i++) {
      traverse(nodeA.children[i], nodeB.children[i]);
    }
  };

  traverse(nodeA, nodeB);

  return areIdentical;
}
