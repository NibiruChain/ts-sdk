#!/usr/bin/env bash

set -e

yarn build
cp README.md packages/nibijs/README.md
yarn run lerna publish from-package
