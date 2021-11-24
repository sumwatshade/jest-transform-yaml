import jsYaml from 'js-yaml';
import md5hex from 'md5-hex';
import { Transformer, TransformOptions } from './types';

const getCacheKey = (
  fileData: string,
  filePath: string,
  options: TransformOptions<unknown> | string,
): string => {
  const optionsString = typeof options === 'string' ? options : JSON.stringify(options);

  return md5hex([
    fileData,
    optionsString,
  ]);
};

const process = (sourceText: string): string => {
  const result:
    // eslint-disable-next-line @typescript-eslint/ban-types
    string | number | undefined | object | null = jsYaml.load(sourceText);
  const json = JSON.stringify(result, null, '\t');
  return `module.exports = ${json}`;
};

const transformer: Transformer = {
  getCacheKey,
  process,
};

export default transformer;

export * from './types';
