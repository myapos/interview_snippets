// https://leetcode.com/problems/letter-tile-possibilities/
const numTilePossibilities = (tiles) => {
  if (tiles.length === 1) {
    return 1;
  }

  let hash = {};

  const recurse = ({ tiles, res }) => {
    if (typeof hash[res] !== "undefined" || tiles.length === 0) {
      return res;
    }

    for (let i = 0; i < tiles.length; i++) {
      const cur = tiles[i];
      const restA = tiles.slice(0, i);
      const restB = tiles.slice(i + 1);

      const rest = restA + restB;

      const tempRes = `${cur}${res}`;

      const val = recurse({
        tiles: rest,
        res: tempRes,
      });

      hash[val] = val;
    }

    return res;
  };

  recurse({ tiles, res: "" });

  return Object.keys(hash).length;
};

export default numTilePossibilities;
