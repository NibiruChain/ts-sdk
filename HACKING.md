# HACKING            <!-- omit in toc -->

- [Testing](#testing)
- [Generating types with protocol buffers](#generating-types-with-protocol-buffers)

## Testing

Tests are run against a live devnet using `jest`. 
- `yarn test`: Runs all of the tests
- `yarn test -t 'query' --verbose`: Runs all tests that have "query" as part of their name.


## Generating types with protocol buffers

The JS types for Nibiru are generated from the [blockchain's `.proto` files](https://github.com/NibiruChain/nibiru/tree/master/proto). The `protocgen.sh` script copies these files and scaffolds code into the `@nibiruchain/api` package. Run it with:

```sh
yarn proto-gen
yarn build
```


