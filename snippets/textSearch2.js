// https://www.greatfrontend.com/questions/javascript/text-search-ii

const getBoldChars = (text, query, boldChars) => {
  for (let i = 0; i < text.length; ) {
    const substr = text.slice(i, i + query.length);
    if (substr.toLowerCase() === query.toLowerCase()) {
      boldChars.fill(1, i, i + query.length);
      // Start from next character if there's a match since one
      // character cannot match the same query more than once.
      i = i + query.length;
    } else {
      i++;
    }
  }

  return boldChars;
};
/**
 * @param {string} text
 * @param {Array<string>} queries
 * @return {string}
 */
export default function textSearch2(text, queries) {
  if (text.trim() === "" || queries.length === 0) {
    return text;
  }

  const boldChars = Array.from({ length: text.length }, () => 0);

  queries.forEach((query) => {
    if (query.trim() === "") {
      return; // continue
    }

    getBoldChars(text, query, boldChars);
  });

  let highlightedString = "";
  for (let i = 0; i < text.length; i++) {
    // When the current character should be bolded
    // and the previous character should not be bolded,
    // append an opening tag to the final string.
    const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i - 1] !== 1;
    // When the current character should be bolded
    // and the next character should not be bolded,
    // append a closing tag to the final string.
    const shouldAddClosingTag = boldChars[i] === 1 && boldChars[i + 1] !== 1;
    let char = text[i];

    if (shouldAddOpeningTag) {
      char = "<b>" + char;
    }

    if (shouldAddClosingTag) {
      char = char + "</b>";
    }
    highlightedString += char;
  }

  return highlightedString;
}
