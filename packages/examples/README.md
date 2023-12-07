# nibijs-examples

This test package is used to make sure that the usage examples for `nibijs`
included in the [`NibiruChain/ts-sdk`
REAMDE](https://github.com/NibiruChain/ts-sdk/tree/main?tab=readme-ov-file) run
as expected. The examples file is run as a script in the GitHub action.

## Usage Guide

Start from the root directory of the repository.

```bash
nvm use
yarn install --check-files
yarn run tsx packages/examples/examples.test.ts
```
