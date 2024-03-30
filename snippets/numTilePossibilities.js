// https://leetcode.com/problems/letter-tile-possibilities/
const numTilePossibilities = (tiles) => {
  if (tiles.length === 1) {
    return 1;
  }

  let hash = {};

  const recurse = ({ tiles, res }) => {
    if (tiles.length === 0) {
      return res;
    }

    for (let i = 0; i < tiles.length; i++) {
      const cur = tiles[i];
      const restA = tiles.slice(0, i);
      const restB = tiles.slice(i + 1);

      const rest = restA + restB;

      const tempRes = `${cur}${res}`;

      //! it could be used in the exit condition too with hash[res] check but
      //! here it is slightly better since we avoid recursive calls from the start
      if (typeof hash[tempRes] === "undefined") {
        const val = recurse({
          tiles: rest,
          res: tempRes,
        });

        hash[val] = val;
      }
    }

    return res;
  };

  recurse({ tiles, res: "" });

  return Object.keys(hash).length;
};

export default numTilePossibilities;
