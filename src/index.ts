import jsYaml from "js-yaml";
import { Transformer, TransformOptions } from "./types";

import crypto from "crypto";

const getCacheKey = (
  fileData: string,
  filePath: string,
  options: TransformOptions<unknown>
): string => {
  const optionsString =
    typeof options === "string" ? options : JSON.stringify(options);

  return crypto
    .createHash("md5")
    .update(fileData)
    .update(optionsString)
    .digest("hex");
};

const process = (sourceText: string): string => {
  const result: string | number | undefined | object | null =
    jsYaml.load(sourceText);
  const json = JSON.stringify(result, null, "\t");
  return `module.exports = ${json}`;
};

const transformer: Transformer = {
  getCacheKey,
  process,
};

export default transformer;

export * from "./types";
