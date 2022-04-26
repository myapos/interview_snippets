function deepCopy(data) {
  return JSON.parse(JSON.stringify(data));
}

export default deepCopy;
