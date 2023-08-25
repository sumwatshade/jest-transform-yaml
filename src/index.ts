import jsYaml from 'js-yaml'
import crypto from 'crypto'
import { Transformer, TransformOptions, TransformedSource } from './types'

const getCacheKey = (
    fileData: string,
    filePath: string,
    options: string | TransformOptions<unknown>
): string => {
    const optionsString =
        typeof options === 'string' ? options : JSON.stringify(options)

    return crypto
        .createHash('md5')
        .update(fileData)
        .update(optionsString)
        .digest('hex')
}

const process = (sourceText: string): TransformedSource => {
    const result = jsYaml.load(sourceText) as unknown as
        | string
        | number
        | undefined
        // eslint-disable-next-line @typescript-eslint/ban-types
        | object
        | null

    const json = JSON.stringify(result, null, '\t')
    return {
        code: `module.exports = ${json}`,
    }
}

const transformer: Transformer = {
    getCacheKey,
    process,
}

export default transformer

export * from './types'
