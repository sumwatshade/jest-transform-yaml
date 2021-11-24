# jest-transform-yaml

> A [Jest](https://jestjs.io/) transformer that allows the import of YAML files

## Description

When you store your data in [YAML format](https://yaml.org/) for your application, you
might want to import that data within your Jest tests. By default,
Jest does not know how to import YAML files, so you will need to 
provide a transformer that can properly load it.

## Installation

NOTE: I generally recommend saving `exact` dependencies to avoid
accidental/unintentional updates, hence the added flags below.

```bash
# NPM
npm install jest-transform-yaml --save-dev

# Yarn
yarn add jest-transform-yaml --dev --exact

# PNPM
pnpm add jest-transform-yaml --save-dev --save-exact
```

## Usage

In your `jest.config.js` (or `jest.config.ts`) file, add
the following:

```javascript
module.exports = {
    // ...
    transform: {
        // ... other transforms ...
        "\\.yaml$": "jest-transform-yaml",
    },
    "moduleFileExtensions": [
        // .. other file extensions ... 
        "yaml"
    ],
    // ...
}
```

## Node support

Currently, this is set up to be tested against all [Node LTS versions](https://nodejs.org/en/about/releases/) and the current. If you observe an issue within your project around Node version support, please feel free to raise a PR or add an issue :smile:

## Alternatives

- [danwang/yaml-jest](https://github.com/danwang/yaml-jest)
- [akameco/jest-yaml-transform](https://github.com/akameco/jest-yaml-transform)