#!/usr/bin/env bash

set -e

cp README.md packages/nibijs/README.md
yarn run lerna publish from-package
