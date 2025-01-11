#!/usr/bin/env node
import { getArguments } from "./validate-args.js";
import * as sass from "sass";

const args = getArguments();
console.log(args);

if (args) {
  const input = `
h1 {
  font-size: 40px;
  code {
    font-face: Roboto Mono;
  }
}`;

  const result = sass.compileString(input);
  console.log(result.css);
}
