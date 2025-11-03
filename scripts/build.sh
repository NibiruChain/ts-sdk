#!/bin/bash
set -e

git submodule init
git submodule update

yarn viem:generate
yarn gql-generate & yarn proto-gen
yarn build:tsc
yarn docgen
