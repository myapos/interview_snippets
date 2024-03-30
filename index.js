import * as utils from "./utils";
import * as data from "./utils/trieData";
const graph1 = {
  A: ["B", "C"],
  B: ["C", "D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

const graph2 = {
  A: ["B", "C"],
  B: ["C", "D"],
  C: ["D"],
  D: ["E"],
  E: ["F"],
  F: [],
};

const graph3 = {
  A: [],
  B: ["A"],
  C: ["B"],
  D: ["C"],
  E: ["D"],
  F: ["E"],
};

const graph4 = {};

const graph5 = { A: [] };
const graph6 = { A: [], B: [] };
const cyclicGraph1 = { A: ["B"], B: ["A"] };
const cyclicGraph2 = {
  A: ["B"],
  B: ["C"],
  C: ["B"],
};

console.log(utils.topologicalSort(graph3));
