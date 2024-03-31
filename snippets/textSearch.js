// https://www.greatfrontend.com/questions/javascript/text-search
const highlightText = ({
  text,
  positions,
  tagStart = "<b>",
  tagEnd = "</b>",
}) => {
  let highlightedText = ""; // Initialize an empty string to store the highlighted text
  let lastIndex = 0; // Keep track of the last index after applying the offset

  for (let i = 0; i < positions.length; i++) {
    let [start, end] = positions[i];

    // Append the non-highlighted text before the current position
    highlightedText += text.substring(lastIndex, start);

    // Append the highlighted portion with tags
    highlightedText += `${tagStart}${text.substring(start, end)}${tagEnd}`;

    // Update the lastIndex to the end index of the current position
    lastIndex = end;
  }

  // Append the remaining non-highlighted text after the last position
  highlightedText += text.substring(lastIndex);

  return highlightedText;
};

const mergeConsecutivePositions = ({ positions = [], newPos }) => {
  if (!Boolean(positions.length)) {
    return false;
  }
  // get last match
  const [lastMatchStart, lastMatchEnd] = positions[positions.length - 1];
  const [newPosStart, newPosEnd] = newPos;

  if (lastMatchEnd === newPosStart) {
    const mergedPos = [lastMatchStart, newPosEnd];
    // overwrite previous match
    newPos = mergedPos;
    positions[positions.length - 1] = mergedPos;

    return true;
  }

  return false;
};

const savePosition = ({ textToLower, position, positions, queryToLower }) => {
  // check for consecutive matches here

  if (
    textToLower.slice(position[0], position[0] + queryToLower.length) ===
    queryToLower
  ) {
    const posEnd = position[0] + queryToLower.length;

    position.push(posEnd);
    return mergeConsecutivePositions({
      positions,
      newPos: position,
    });
  }

  return false;
};

const textSearch = (text, query) => {
  if (query.length === 0) {
    return text;
  }

  const textToLower = text.toLowerCase();
  const queryToLower = query.toLowerCase();

  let i = 0,
    j = 0;
  let positions = [];

  while (i < textToLower.length) {
    let char = textToLower[i];
    let position = [];
    let positionIsFull = false;

    const positionHasAppearedAlready =
      Boolean(positions.length) && i < positions[positions.length - 1][1];

    if (char === queryToLower[j] && !positionHasAppearedAlready) {
      position.push(i);

      const hasMergedPosition = savePosition({
        textToLower,
        position,
        positions,
        queryToLower,
      });
      positionIsFull = position.length === 2;

      positionIsFull && !hasMergedPosition && positions.push(position);

      position = []; // reset
      j = 0; //reset
    }

    i++;
  }

  return highlightText({ text, positions });
};

export default textSearch;
