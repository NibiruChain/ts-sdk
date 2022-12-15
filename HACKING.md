# HACKING            <!-- omit in toc -->

- [Testing](#testing)
- [Generating types with protocol buffers](#generating-types-with-protocol-buffers)
- [Generating documentation](#generating-documentation)

## Testing

Tests are run against a live devnet using `jest`. 
- `yarn test`: Runs all of the tests
- `yarn test -t 'query' --verbose`: Runs all tests that have "query" as part of their name.


## Generating types with protocol buffers

The JS types for Nibiru are generated from the [blockchain's `.proto` files](https://github.com/NibiruChain/nibiru/tree/master/proto). The `protocgen.sh` script copies these files and scaffolds code into the `@nibiruchain/protojs` package. Run it with:

```sh
yarn clean
yarn proto-gen
yarn build
```

## Generating documentation

At the root level, simply use 
```sh
yarn build
```

The `nibijs` package is documented in JSDoc format with TSDoc. TSDoc is a proposed standardization of the doc comments used in TypeScript code. Microsoft developed it alongside an open source reference implementation of a parser that's compliant with the standard, which is published on npm as [@microsoft/tsdoc](https://www.npmjs.com/package/@microsoft/tsdoc).

[TypeDoc](https://www.npmjs.com/package/typedoc) is a documentation generator for TypeScript projects built on top of TSDoc. We use TypeDoc to generate HTML and CSS for the nibijs docs, and `typedoc-plugin-markdown` to create the corresponding docs in markdown. 

The corresponding scripts for TypeDoc can are defined in `packages/nibijs/package.json`:
```
yarn docgen:md
yarn docgen
```

> **Note**
> The `docgen:md` is run automatically as a part of the `build` script. THis is to make sure that the latest documentation is available for access from the [NibiruChain/docs-nibiru repo](https://github.com/NibiruChain/docs-nibiru). 

References:

- [@use JSDoc](https://jsdoc.app/) 
- [TSDoc docs](https://tsdoc.org/)
- [TypeDoc docs](https://typedoc.org/)
- [TypeDoc on npm](https://www.npmjs.com/package/typedoc)


