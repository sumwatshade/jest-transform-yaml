# jest-transform-yaml

> A Jest transformer that allows the import of YAML files

## Description

When you store your data in YAML format for your application, you
might want to import that data within your Jest tests. By default,
Jest does not know how to import YAML files, so you will need to 
provide a transformer

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

```js
{
    // ... config
    transform: {
        // ... other transforms
        "\\.yaml$": "jest-transform-yaml",
    },
    "moduleFileExtensions": [/* ... other file extensions ... */, "yaml"],
}
```
